import express from 'express';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.join(__dirname, 'data');
const bookingsFile = path.join(dataDirectory, 'bookings.json');
const port = Number(process.env.PORT || 8787);

const app = express();
app.use(express.json({ limit: '32kb' }));

async function readBookings() {
  try {
    const contents = await readFile(bookingsFile, 'utf8');
    const bookings = JSON.parse(contents);
    if (!Array.isArray(bookings)) {
      throw new Error('Booking storage must contain an array.');
    }
    return bookings;
  } catch (error) {
    if (error.code === 'ENOENT') {
      await mkdir(dataDirectory, { recursive: true });
      await writeFile(bookingsFile, '[]\n', 'utf8');
      return [];
    }
    throw error;
  }
}

function validateBooking(payload) {
  const requiredFields = [
    'selectedService',
    'serviceLocation',
    'petName',
    'petBreed',
    'clientName',
    'clientPhone',
    'bookingDate',
    'timeSlot',
    'privacyConsent'
  ];

  if (!payload || typeof payload !== 'object') {
    return 'A booking payload is required.';
  }

  for (const field of requiredFields) {
    if (field === 'privacyConsent') continue;
    if (typeof payload[field] !== 'string' || payload[field].trim() === '') {
      return `${field} is required.`;
    }

    if (payload.privacyConsent !== true) {
      return 'Privacy consent is required.';
    }
  }

  if (!['kennel', 'mobile_van'].includes(payload.serviceLocation)) {
    return 'serviceLocation must be kennel or mobile_van.';
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(payload.bookingDate)) {
    return 'bookingDate must use YYYY-MM-DD format.';
  }

  return null;
}

app.post('/api/bookings', async (request, response) => {
  const validationError = validateBooking(request.body);
  if (validationError) {
    response.status(400).json({ error: validationError });
    return;
  }

  try {
    const bookings = await readBookings();
    const booking = {
      id: randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      selectedService: request.body.selectedService.trim(),
      serviceLocation: request.body.serviceLocation,
      petName: request.body.petName.trim(),
      petBreed: request.body.petBreed.trim(),
      petAge: typeof request.body.petAge === 'string' ? request.body.petAge.trim() : '',
      clientName: request.body.clientName.trim(),
      clientPhone: request.body.clientPhone.trim(),
      nairobiEstate: typeof request.body.nairobiEstate === 'string' ? request.body.nairobiEstate.trim() : '',
      bookingDate: request.body.bookingDate,
      timeSlot: request.body.timeSlot.trim(),
      amountKES: Number.isFinite(request.body.amountKES) ? request.body.amountKES : 0,
      privacyConsentAt: new Date().toISOString()
    };

    bookings.push(booking);
    await mkdir(dataDirectory, { recursive: true });
    await writeFile(bookingsFile, `${JSON.stringify(bookings, null, 2)}\n`, 'utf8');
    response.status(201).json({ booking });
  } catch (error) {
    console.error('Unable to save booking:', error);
    response.status(500).json({ error: 'The booking could not be saved. Please try again.' });
  }
});

app.get('/api/bookings', async (_request, response) => {
  try {
    response.json({ bookings: await readBookings() });
  } catch (error) {
    console.error('Unable to read bookings:', error);
    response.status(500).json({ error: 'Bookings could not be loaded.' });
  }
});

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.use((error, _request, response, next) => {
  if (error instanceof SyntaxError && 'body' in error) {
    response.status(400).json({ error: 'Request body must contain valid JSON.' });
    return;
  }
  next(error);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Uptop K9 booking server listening on http://localhost:${port}`);
});
