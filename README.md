# Aashi Chourasia: Portfolio Website

A static website (HTML, CSS, JavaScript). No build step or server is needed.

## Folder structure
```
index.html          main page
css/style.css       all styles
js/main.js          all interactions (tabs, gallery, lightbox, video player)
assets/images/      creatives, screenshots, brand work
assets/decks/       strategy deck pages (Advanta, BASF Nunhems)
assets/thumbnails/  video cover images
assets/videos/      reels (compressed MP4s)
.nojekyll           tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages
1. Sign in at github.com and click **New repository**. Name it `portfolio` (or `yourusername.github.io` for a root URL). Set it to **Public** and click **Create**.
2. On the new repository page click **uploading an existing file**.
3. Unzip this folder on your computer. Open it and drag **everything inside** (`index.html`, `css`, `js`, `assets`, `.nojekyll`, `README.md`) into the upload area. `index.html` must be at the top level, not inside another folder.
4. Click **Commit changes**. If the browser struggles with the videos, upload the `assets/videos` folder in a second batch.
5. Go to **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then **Save**.
6. Wait 1–2 minutes. Your site will be live at `https://YOURUSERNAME.github.io/portfolio/`.

## Updating the site
- Change text in `index.html` (and `js/main.js` for the journey, brands, case studies and skills text).
- Replace an image by uploading a file with the same name into the same folder.
- Add a reel: put the MP4 in `assets/videos/`, a cover in `assets/thumbnails/`, and add a line to the `R` list in `js/main.js`.

## Notes
- Fonts load from Google Fonts, so the site needs an internet connection to look exactly right.
- Keep each file under 100 MB (GitHub's limit). All files here are far below that.
- Contact details (email, phone, WhatsApp, LinkedIn) are in `index.html`.
