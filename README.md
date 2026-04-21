# Our Kitchen 🍳

A personal meal planning app for 2 pax with protein tracking, weekly planning, grocery list generation, and recipe management.

## Features
- 🍽 **Today tab** — pick protein + veg, track combined protein intake
- 📅 **Week tab** — plan the full week, auto-generate shopping list, download as PDF
- 📖 **Browse tab** — search 73+ recipes by ingredient, method, cuisine
- ✨ **Add recipes** — paste text or Instagram link, Claude parses it automatically

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done! You get a public URL like `our-kitchen.vercel.app`

## Local Development

```bash
npm install
npm run dev
```

## Tech Stack
- React 18
- Vite 5
- Inline styles (no CSS framework)
- localStorage for persistence
- Anthropic API for recipe parsing
