# The UK Hotspot Register

A static, browser-based research archive cataloguing UK "high-strangeness"
hotspots: places where paranormal, UAP, and cryptid reports cluster in one area.
Every site is scored on two independent axes - Strangeness and Evidence Quality -
so well-attested cases stay visibly separate from tabloid-amplified ones.

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

## Community and intake

The public report form is live at `report.html`, linked from the masthead. See
`COMMUNITY.md` for how it and the (still-planned) Reddit community feed cases into
the Register, and `INTAKE-SETUP.md` for the internal GitHub-based triage pipeline
that turns an accepted report into a Register case.
