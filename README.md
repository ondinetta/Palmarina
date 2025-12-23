## Palmarina

**PALMARINA** is a single-screen, editorial “coming soon” page that mirrors the UX blueprint in `documentation/PRD.md`.

### Structure

- **`index.html`**: Main PALMARINA layout (split desktop, stacked mobile).
- **`styles.css`**: Visual design (sand background, editorial typography, responsive layout).
- **`script.js`**: Fade-in behavior, image fallback, and optional click-to-copy for GPS coordinates.
- **`assets/`**: Place `palmarina-hero.jpg` here to power the hero image.

### Running the page

- **Quick preview**: Open `index.html` directly in your browser.
- **Simple local server (recommended)**:
  - With Python: `python3 -m http.server 4173`
  - Then visit `http://localhost:4173` in your browser.

### Customisation

- **Coordinates**: Update the content and `data-coordinates` attribute in the `.coordinates` element in `index.html`.
- **Hero image**: Add or replace `assets/palmarina-hero.jpg` with your own high-quality, warm-toned image.
- **Analytics**: In `index.html`, swap the commented Plausible snippet with your real domain, or integrate another analytics script as desired.

