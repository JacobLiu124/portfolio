# Personal Portfolio

A single-page personal site — React + Vite, plain CSS, no UI framework.
Dark background with an amber "contour" accent, inspired by segmentation
boundary lines. Everything scrolls seamlessly on one page: Hero →
Projects → Contact.

## Fill in your content

Everything you need to personalize lives in two files:

- **`src/data/profile.js`** — your name, role, bio, photo path, social
  links, and contact bubbles.
- **`src/data/projects.js`** — one object per project (title, summary,
  skill tags, optional screenshot, optional links, and structured
  documentation). Leave `documentation: []` until you're ready to write
  it — the modal falls back to just showing the summary.

Drop your photo and any project screenshots into `public/` (e.g.
`public/headshot.jpg`, `public/projects/my-project/cover.png`) and point
the data files at those paths.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically
on every push to `main`.

1. **Set the base path.** In `vite.config.js`, change:
   ```js
   base: "/your-repo-name/",
   ```
   to match your actual repo name — e.g. if your repo is
   `github.com/you/portfolio`, set `base: "/portfolio/"`.
   (If your repo is named exactly `<your-username>.github.io`, set
   `base: "/"` instead.)

2. **Push to GitHub**, then in the repo go to
   **Settings → Pages → Build and deployment → Source**, and select
   **GitHub Actions**.

3. Push to `main` (or run the workflow manually from the Actions tab).
   The site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Alternative: manual deploy with `gh-pages`

If you'd rather not use Actions:

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Then set the repo's Pages source to the `gh-pages` branch.

## Notes on the two "modal vs. new page" options

You asked which is easier — **the modal overlay (what's built here) is
the better fit** for this project:

- No router needed, so no extra GitHub Pages routing headaches (project
  sites on a sub-path are a common source of 404s with client-side
  routers on refresh/direct links).
- Keeps the "seamless one page" feel you asked for — the background
  page and scroll position stay intact underneath.
- Still fully deep-linkable in spirit: you can extend `activeId` state
  in `Projects.jsx` to sync with the URL hash if you later want
  shareable links to a specific project.

A separate page per project is the better call if you want each project
to be indexable on its own SEO-wise, or if the write-ups get long enough
that a dedicated reading page feels more natural than a scrolling
overlay. If you want that later, ask and it can be swapped in via
`react-router`.
