# Run doc — Lobo Tufting dev server

## Reproduce uncommitted artifacts

No special artifacts needed. The workspace is the main checkout, so `.env.local` is already in place.

## Start the dev server

```bash
cd /Users/zn/Documents/Lobo-website-v1/lobo-tufting
npx vite --host 0.0.0.0 --port 3000
```

- Default port: **3000** (configured in `vite.config.ts`)
- The server binds to `0.0.0.0` so it's accessible on the network
- Sanity Studio runs separately on `studio/` (port 3333 by default)
