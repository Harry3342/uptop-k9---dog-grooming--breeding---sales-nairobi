create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now(),
  selected_service text not null,
  service_location text not null check (service_location in ('kennel', 'mobile_van')),
  pet_name text not null,
  pet_breed text not null,
  pet_age text not null default '',
  client_name text not null,
  client_phone text not null,
  nairobi_estate text not null default '',
  booking_date date not null,
  time_slot text not null,
  amount_kes integer not null default 0 check (amount_kes >= 0),
  privacy_consent_at timestamptz not null
);

alter table public.bookings enable row level security;
