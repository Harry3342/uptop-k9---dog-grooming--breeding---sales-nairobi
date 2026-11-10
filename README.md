# Uptop K9

Uptop K9 is a React/Vite website for the Nairobi kennel, with a booking form backed by a Supabase Edge Function in production. M-PESA payments are manual: use Buy Goods Till **6941587**. The website does not initiate Safaricom STK Push payments.

## Run locally

Prerequisites: Node.js and npm.

```text
npm ci
npm run dev
```

Local development runs the Vite website and Express booking API together. Local bookings are stored in `data/bookings.json`, which is ignored by Git because it contains customer information.

## Configure Supabase bookings

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL Editor.
3. Install the Supabase CLI, log in, and link this project:

   ```text
   supabase login
   supabase link --project-ref YOUR_PROJECT_REF
   ```

4. Configure the Edge Function secrets. Set `ALLOWED_ORIGIN` to the exact deployed website origin (for example, `https://YOUR_USERNAME.github.io`):

   ```text
   supabase secrets set SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY ALLOWED_ORIGIN=https://YOUR_USERNAME.github.io
   ```

5. Deploy the booking function:

   ```text
   supabase functions deploy create-booking --no-verify-jwt
   ```

The Supabase service-role key belongs only in Supabase Function secrets. Never put it in frontend code or a `VITE_` variable. The function URL is public and is safe to use as the website's build setting.

## Deploy the frontend to GitHub Pages

The repository includes [a GitHub Actions workflow](./.github/workflows/deploy-pages.yml) that builds and publishes the frontend when changes are pushed to `main`.

1. In GitHub, add an Actions repository secret named `VITE_BOOKING_API_URL` with the value `https://YOUR_PROJECT_REF.supabase.co/functions/v1/create-booking`.
2. In the repository settings, enable **Pages → Build and deployment → Source: GitHub Actions**.
3. Push the site to the `main` branch. The workflow builds the frontend with the Supabase booking URL and deploys `dist` to Pages.

The Vite Pages base path is configured for the `uptopk9` repository name in `vite.config.ts`. If the GitHub repository uses a different name, update that path before deploying.
