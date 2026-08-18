# The British Hotspot Register

A static, browser-based research archive cataloguing British "high-strangeness"
hotspots: places where paranormal, UAP, and cryptid reports cluster in one area.
Part of [theparanormalpad.com](https://theparanormalpad.com). Every site is scored
on two independent axes - Strangeness and Evidence Quality - so well-attested cases
stay visibly separate from tabloid-amplified ones.

## Running it locally

No build step, no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static file server, e.g. `python3 -m http.server`

## Adding a site

Edit `assets/js/data.js` and copy an existing entry in the `SITES` array as a
template. The full field-by-field schema is documented in `data/schema.md`.

## Project structure and conventions

See `PROJECT.md` for the full brief: file layout, data model, house style
(plain hyphens only, no invented source URLs, evidence discipline), and how
ticket work is organised.
