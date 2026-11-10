const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function validateBooking(payload: unknown): string | null {
  if (!payload || typeof payload !== 'object') {
    return 'A booking payload is required.';
  }

  const booking = payload as Record<string, unknown>;
  const requiredTextFields = [
    'selectedService',
    'petName',
    'petBreed',
    'clientName',
    'clientPhone',
    'bookingDate',
    'timeSlot',
  ];

  for (const field of requiredTextFields) {
    if (typeof booking[field] !== 'string' || booking[field].trim() === '') {
      return `${field} is required.`;
    }
  }

  if (!['kennel', 'mobile_van'].includes(String(booking.serviceLocation))) {
    return 'serviceLocation must be kennel or mobile_van.';
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(booking.bookingDate))) {
    return 'bookingDate must use YYYY-MM-DD format.';
  }

  if (booking.privacyConsent !== true) {
    return 'Privacy consent is required.';
  }

  if (
    booking.amountKES !== undefined &&
    (typeof booking.amountKES !== 'number' ||
      !Number.isInteger(booking.amountKES) ||
      booking.amountKES < 0)
  ) {
    return 'amountKES must be a non-negative integer.';
  }

  return null;
}

Deno.serve(async (request) => {
  const allowedOrigin = Deno.env.get('ALLOWED_ORIGIN') || '*';
  const responseHeaders = { ...headers, 'Access-Control-Allow-Origin': allowedOrigin };

  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: responseHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed.' }), {
      status: 405,
      headers: responseHeaders,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Request body must contain valid JSON.' }), {
      status: 400,
      headers: responseHeaders,
    });
  }

  const validationError = validateBooking(payload);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), {
      status: 400,
      headers: responseHeaders,
    });
  }

  const booking = payload as Record<string, unknown>;
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Supabase function secrets are not configured.');
    return new Response(JSON.stringify({ error: 'The booking service is not configured.' }), {
      status: 500,
      headers: responseHeaders,
    });
  }

  try {
    const databaseResponse = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      selected_service: String(booking.selectedService).trim(),
      service_location: booking.serviceLocation,
      pet_name: String(booking.petName).trim(),
      pet_breed: String(booking.petBreed).trim(),
      pet_age: typeof booking.petAge === 'string' ? booking.petAge.trim() : '',
      client_name: String(booking.clientName).trim(),
      client_phone: String(booking.clientPhone).trim(),
      nairobi_estate: typeof booking.nairobiEstate === 'string' ? booking.nairobiEstate.trim() : '',
      booking_date: booking.bookingDate,
      time_slot: String(booking.timeSlot).trim(),
      amount_kes: typeof booking.amountKES === 'number' ? booking.amountKES : 0,
      privacy_consent_at: new Date().toISOString(),
    }),
  });

  if (!databaseResponse.ok) {
    console.error('Supabase booking insert failed:', await databaseResponse.text());
    return new Response(JSON.stringify({ error: 'The booking could not be saved. Please try again.' }), {
      status: 500,
      headers: responseHeaders,
    });
  }

    const savedBookings: unknown = await databaseResponse.json();
    if (!Array.isArray(savedBookings) || savedBookings.length === 0) {
      console.error('Supabase booking insert returned no saved booking.');
      return new Response(JSON.stringify({ error: 'The booking could not be saved. Please try again.' }), {
        status: 500,
        headers: responseHeaders,
      });
    }

    return new Response(JSON.stringify({ booking: savedBookings[0] }), {
      status: 201,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Supabase booking request failed:', error);
    return new Response(JSON.stringify({ error: 'The booking could not be saved. Please try again.' }), {
      status: 500,
      headers: responseHeaders,
    });
  }
});
