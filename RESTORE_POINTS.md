# Restore points

## Before the Digital Yunjin dream layout — 15 October 2026

- Snapshot commit: `b2184323518c9241041ac19e002a9b0808969394`
- Backup branch: `backup/before-yunjin-dream-20261015-b218432`
- Previous Yunjin layout: `project.html?id=yunjin&view=original`

The previous-layout route uses the original Yunjin rendering code and media. The new layout is scoped to the `yunjin-project-page` body class; the shared original project styles remain available.

To restore the previous layout as the default, remove the Yunjin-specific rendering branch from `project.js` and publish a new commit. Preserve unrelated project updates. The backup branch also retains the complete site at the snapshot above.

## Before the Digital Yunjin gallery update — 16 October 2026

- Snapshot commit: `1a5de5efc0792a4a838f715f9cd250942c371c6b`
- Backup branch: `backup/before-yunjin-gallery-20261016-1a5de5e`

To return to the version with the final film below the project chapters, restore `yunjin.js` and `project.html` from this snapshot in a new commit. The additional `yunjin.css` file is scoped to `yunjin-editorial-page` and is inactive with the previous rendering code. Preserve unrelated updates and existing media files. The original-layout route above remains available.
