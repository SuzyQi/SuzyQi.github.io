# Xixian Qi — Portfolio

An immersive cylindrical portfolio gallery designed for GitHub Pages. Works are arranged around an invisible 3D cylinder: drag, swipe, scroll or use the arrow keys to rotate the gallery, then click a frame to enter its project page. The site is framework-free.

## Publish on GitHub Pages

1. Create a public GitHub repository (for example `portfolio`).
2. Upload `index.html`, `project.html`, `styles.css`, `script.js`, `project.js` and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/portfolio/`.

## Replace the project placeholders

Put project media inside `assets/`, using simple lowercase file names. Recommended formats:

- Images: `.webp` (1600–2400 px wide)
- Video: `.mp4` (H.264, compressed for web)
- 3D: `.glb` (ideally under 15 MB)
- CV: `.pdf`

The six framed works are in `index.html`. Each visual uses CSS so the first version works without images. Replace the contents of each `<figure class="art …">` with an image when your final media is ready.

Project-page text and media are stored in `project.js` in the `projects` array.

## Structure

```text
portfolio/
├── index.html
├── project.html
├── styles.css
├── script.js
├── project.js
├── README.md
└── assets/
```

## Notes

- The site is responsive and includes reduced-motion support.
- Contact email is currently `1152237749q@gmail.com`.
- Google Fonts are loaded online. To make the site fully self-contained, download and host the font files in `assets/fonts/`.
