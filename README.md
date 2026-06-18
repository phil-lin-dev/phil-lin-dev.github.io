# Philip Lin — Portfolio / Resume Site

A fast, responsive personal portfolio website built with plain HTML, CSS, and
JavaScript — no build step, no dependencies. Modern dark theme.

## Features

- Single-page design: Hero, About, Skills, Projects, Experience, Contact
- Fully responsive with a mobile nav menu
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Sticky blurred navbar, animated grid background
- Downloadable resume link
- SEO + social-preview meta tags

## Run locally

It's a static site — just open `index.html` in a browser. For a local server
(needed if you add things like fetch requests later):

```bash
# Python (no Node required)
python -m http.server 5500
# then open http://localhost:5500
```

## Make it yours — checklist

Edit `index.html` and replace the placeholder content:

- [ ] Name, tagline, and intro in the **Hero** section
- [ ] **About** text and the facts card (city, school, etc.)
- [ ] **Skills** chips — keep only what you actually use
- [ ] **Projects** — real titles, descriptions, and `Code` / `Live` links
- [ ] **Experience** — jobs, internships, education with real dates
- [ ] Social links (GitHub, LinkedIn) — update the `href`s
- [ ] Drop your resume PDF at `assets/resume.pdf`
- [ ] Add a favicon and an Open Graph preview image

Colors live as CSS variables at the top of `css/styles.css` (`--accent`, etc.).

## Deploy (free)

### GitHub Pages
1. Push this folder to a GitHub repo.
2. Settings → Pages → Source: `main` branch, `/root`.
3. Site goes live at `https://<username>.github.io/<repo>/`.

Other one-click options: **Netlify**, **Vercel**, **Cloudflare Pages** — drag
the folder in or connect the repo.

## Structure

```
portfolio-site/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/          # resume.pdf, images, favicon
└── README.md
```
