# MV Consulting

Personal consulting site for Mihaela Vacari — GTM strategy, outbound systems, and MVP builds for early-stage startups.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Push this repo to GitHub (or deploy from the Vercel CLI).
2. Import the project in [Vercel](https://vercel.com/new).
3. After the first deploy succeeds, open **Project → Settings → Domains**.
4. Add `mvconsulting.online` and `www.mvconsulting.online`.
5. At your domain registrar, point DNS as Vercel instructs (usually an A record for apex and CNAME for `www`).
6. Wait for SSL to provision, then visit [https://www.mvconsulting.online](https://www.mvconsulting.online).

### CLI alternative

```bash
npx vercel
npx vercel --prod
npx vercel domains add mvconsulting.online
```

## Content

Editable copy lives in `src/lib/content.ts`. Paste LinkedIn recommendation quotes into the `feedback` array when ready (`quote` + `name` + `role`).
