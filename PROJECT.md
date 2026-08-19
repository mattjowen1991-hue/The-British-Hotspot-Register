# The UK Hotspot Register - Project Brief

This file is the shared context for the project. Read it at the start of a working
session before picking up a ticket. It explains what this is, how it is built, the
conventions to follow, and how work is organised.

---

## 1. What this is

A static, browser-based research archive cataloguing UK "high-strangeness"
hotspots: places where paranormal, UAP, and cryptid reports cluster in one area.
It belongs to theparanormalpad.com. The audience is serious researchers, not casual
readers, so the tone is investigative and sober, not spooky or sensational.

The core idea: every site is scored on two independent axes and sorted by how well
it holds up, so well-attested cases stay visibly separate from tabloid-amplified ones.

- **Axis A - Strangeness (0-100):** how anomalous and how varied the phenomena are.
- **Axis B - Evidence Quality (0-100):** witness calibre, contemporaneous records,
  physical traces, independence from tabloid amplification.
- **Threshold: 60.** The working bar for "worth serious follow-up." (This mirrors an
  existing UAP document-scoring rubric used elsewhere on the project.)

## 2. Current state

The site has been split out of the original self-contained `index.html` (inline CSS,
inline JS, and a `SITES` data array near the top of the script) into the structure
described in section 3. It still runs on GitHub Pages with no build step.

## 3. Target file structure

Keep it buildless where possible (plain static files that GitHub Pages serves
directly). Do not introduce a framework or bundler unless a ticket explicitly calls
for it.

```
/
  index.html            markup only; links out to css and js
  /assets
    /css
      styles.css        all styles (extracted from the inline <style>)
    /js
      data.js           the SITES array, exported (window.SITES or a module export)
      render.js         rendering + filtering + sorting logic
      main.js           wiring: reads controls, calls render
    /img                any imagery added later
  /data
    schema.md            the record schema, documented (see section 5)
  PROJECT.md            this file
  README.md             short public-facing description + local run notes
```

Rationale: `data.js` is the file that changes most often (new cases), so it must be
trivial to edit in isolation. Logic and styling change rarely by comparison. Keep them
apart so a "new case" ticket never has to touch rendering code.

## 4. Tech constraints

- Plain HTML, CSS, and vanilla JS. No React, no build step, no npm dependencies unless
  a ticket explicitly introduces one and explains why.
- Must run by opening `index.html` directly (file://) AND on GitHub Pages. That means
  no fetch of local JSON that would break under file://; keep data as a JS file that is
  script-included, not fetched, unless a ticket deliberately moves to a served setup.
- No browser storage APIs (localStorage/sessionStorage) unless a ticket calls for it.
- Keep it accessible: visible keyboard focus, sufficient contrast, reduced-motion
  respected. These already exist; do not regress them.

## 5. Data model (the SITES record)

Each site is one object. Fields:

- `id` - short case code shown top-left, e.g. "UK-011".
- `name` - site name.
- `nation` - "England" | "Scotland" | "Wales".
- `region` - county / area line.
- `coords` - rough "lat, long" string (reserved for a future map view).
- `period` - active date range, free text.
- `phenomena` - array of tag strings. Tags are reused across sites to build the filter
  chips automatically, so reuse existing tag spellings exactly rather than inventing
  near-duplicates.
- `tier` - "documented" | "mixed" | "volume" | "single". Drives the standing stamp.
- `strangeness` - integer 0-100 (Axis A).
- `evidence` - integer 0-100 (Axis B).
- `summary` - 1-2 sentences, original wording. `<strong>` is the only allowed inline tag.
- `cases` - array of `{ year, title, desc }`.
- `notes` - optional skeptical / context line.
- `sources` - array of `{ label, url }`. Omit `url` for a text-only source note.

Full documented schema: `data/schema.md`.

## 6. Conventions (important)

- **Dashes:** use plain hyphens only. Never use em dashes or en dashes anywhere in
  content, copy, or committed text. This is a hard house rule (long dashes read as
  AI-generated).
- **Scores are editorial.** They are a starting point, not a verdict, and can be tuned.
  Keep the two axes genuinely independent: a site can be very strange and poorly
  evidenced, or mundane and well recorded.
- **Evidence discipline is the whole point.** When adding a case, separate what is
  well-attested from what is amplified or single-sourced, and put the honest caveat in
  `notes`. Never quietly upgrade a rumour into a fact.
- **Sources:** never invent a URL. If you cannot stand behind a link, use a text-only
  source note (label with no url). Prefer primary documents (MoD releases, coroner
  reports, contemporaneous press) over aggregators as they are found.
- **No verbatim copying** from source articles. Summaries are original wording.
- **Do not regress look or behaviour** during refactors. If a change is visual or
  behavioural, that should be its own ticket, not a side effect.

## 7. How work is organised

Work is tracked on a kanban board, one ticket per discrete thing: a feature, an
upgrade, a bug, or a new case/site to add. When picking up a ticket:

1. Read this file and `data/schema.md` if touching data.
2. Do only what the ticket describes. If you spot adjacent work, note it as a suggested
   new ticket rather than expanding scope.
3. For a new-case ticket, edit `assets/js/data.js` only.
4. Keep commits scoped to the ticket. Reference the ticket id in the commit message.

## 8. Ticket types and definition of done

- **Case / site:** added to `assets/js/data.js`, all schema fields present, scores set,
  at least one source (or an honest text-only note), skeptical `notes` where relevant,
  renders correctly, no dashes.
- **Feature:** works by opening `index.html` directly and on Pages, keyboard-accessible,
  reduced-motion respected, no visual regression elsewhere.
- **Bug:** reproduced, fixed, and a note added on what caused it.
- **Upgrade/refactor:** behaviour and appearance unchanged unless the ticket says
  otherwise; structure improved per section 3.

## 9. Backlog seeds (candidate tickets, not yet scoped)

- ~~Split the inline `index.html` into the structure in section 3 (do this first).~~ Done.
- Add a map view driven by the existing `coords` field.
- Add per-case source rows (each case its own citations) rather than site-level only.
- Add a "last reviewed" date per site to track freshness.
- Expand coverage: more Scottish and Welsh sites; the West Country big-cat cluster;
  the Pennine "earth lights" corridor beyond Todmorden and Longdendale.
- Swap Wikipedia anchor links for primary documents as they are sourced.
- Optional: a compact A/B scatter plot of all sites (strangeness vs evidence) as a
  landing visual, threshold lines at 60 on both axes.

More backlog seeds, covering the Reddit community and the public report intake
pipeline, are in `COMMUNITY.md`.
