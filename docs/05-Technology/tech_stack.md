# Tech Stack (MVP)

* **Framework:** Next.js 14 (App Router, TypeScript)
* **Styling:** Tailwind CSS 3.x
* **Deployment:** Vercel (production + preview)
* **CSR/SSR:** Static export preferred; hydrate only Hero CTA button.
* **CMS (optional):** Notion‐to‐Markdown for copy updates.
* **Analytics:** Vercel Analytics or Plausible (no cookies by default).

Folder structure suggestion:

```
/app
  layout.tsx
  page.tsx
  /components
    Header.tsx
    Hero.tsx
    Manifesto.tsx
    Loop.tsx
    Services.tsx
    CTA.tsx
    Contact.tsx
    Footer.tsx
/public
  loop.svg
  logo.svg
```
