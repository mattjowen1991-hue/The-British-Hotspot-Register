# Website Seed Ticket (for Claude Code)

Goal: replace the ten Register entries' placeholder content with the finished
gold-standard content, and add the schema, render, tier and anchor support it needs. The
site currently shows the original scaffold summaries and bare-string sources; nothing
gold-standard is live yet. This ticket makes it live.

Read `PROJECT.md` and `HOUSE-STYLE.md` first. House rule throughout: plain hyphens only,
never em or en dashes.

---

## 1. Content source files (authoritative)

The finished prose already exists in these committed files. Use them as the source of
truth; do not rewrite the content, integrate it.

- **Narratives (the card `summary`):**
  - For UK-001, UK-002, UK-003, UK-004, UK-006, UK-008, UK-009: use the narrative in
    `CONTENT-PASS.md` (Batch 1).
  - For UK-005 Warminster, UK-007 Longdendale, UK-010 Pentyrch: use the SHARPENED
    narrative in `CONTENT-PASS-2.md` (these three were revised there; the Batch 1 versions
    are superseded).
- **Sources (the `sources` array):** use `CONTENT-PASS-2.md` for all ten. Each is already
  written as a `{ label, url, note, strength }` object.
- **Prosaic explanations (the `prosaic` array):** use `PROSAIC.md` for all ten. Each item
  is `{ explanation, why }` with a source; structure them as below.

If any narrative in `CONTENT-PASS.md` still carries a "SOURCES: pending vetting" line,
ignore that line; the vetted sources are in `CONTENT-PASS-2.md`.

## 2. Schema changes (per entry object in `data.js`)

- `sources`: change from an array of bare strings to an array of objects:
  `{ label, url, note, strength }`, where `strength` is `"primary" | "reputable" | "weak"`.
  `url` may be omitted for a source that is a named work with no link (render as plain
  text, no anchor).
- `prosaic`: new array. Each item:
  `{ explanation, why, sources: [ { label, url, strength } ] }`.
- `redditThread`: new string field, default `""`. Holds the URL of the case's Reddit
  thread once posted.
- Keep all existing fields (name, nation, region, coords, period, phenomena, cases, the
  one-line skeptical-read note) as they are, except the score/tier values in section 4.

## 3. Tier vocabulary (expand)

The finished content uses two tiers the current map does not have. Add them.

| key | label |
|-----|-------|
| documented | Well-documented |
| mixed | Mixed |
| volume | Volume-driven |
| single | Single-source |
| **explained** (new) | **Likely explained** |
| **contested** (new) | **Contested** |

Give the two new tiers a pip/confidence value consistent with the existing scale
(suggested: explained = 2 pips, contested = 1 pip) and the same amber styling.

## 4. Scores and tiers (set these exactly)

| id | tier key | Strangeness | Evidence |
|----|----------|-------------|----------|
| UK-001 | documented | 82 | 70 |
| UK-002 | mixed | 88 | 38 |
| UK-003 | volume | 60 | 45 |
| UK-004 | documented | 80 | 55 |
| UK-005 | volume | 65 | 40 |
| UK-006 | mixed | 68 | 42 |
| UK-007 | mixed | 55 | 30 |
| UK-008 | single | 78 | 25 |
| UK-009 | explained | 45 | 30 |
| UK-010 | contested | 75 | 28 |

## 5. Render changes (the card)

1. **Sources block.** Render each source as its `label` (a link when `url` is present),
   followed by its `note`. Show `strength` as a small tag as elsewhere. A `weak` source
   renders with a muted "lower-confidence source" marker so a reader can see it at a
   glance.
2. **Prosaic explanations.** Add a "Prosaic explanations" expander directly below the
   existing one-line skeptical-read note. Inside, render each `prosaic` item as a bullet:
   the `explanation` in bold, then the `why` line, then its source link(s).
3. **Discuss on Reddit.** If `redditThread` is a non-empty URL, render a "Discuss on
   Reddit" link on the card. If empty, render nothing (no dead link).
4. **Per-case anchors.** Give each card an `id` equal to its case id (e.g. `id="UK-004"`)
   so `ukhotspotregister.com/#UK-004` deep-links and scrolls to that card. This is what the
   Reddit seed posts link to.

## 6. Definition of done

- All ten `summary` fields hold the gold-standard narrative (with the three sharpened
  versions for Warminster, Longdendale, Pentyrch).
- All ten `sources` arrays are objects with notes and strength; weak sources are visibly
  marked.
- All ten `prosaic` arrays are present and render in the expander with working source
  links.
- The two new tiers render correctly; UK-009 shows "Likely explained" and UK-010 shows
  "Contested".
- Scores match the table in section 4.
- Every card has an `id` anchor and a `#UK-00X` deep link scrolls to it.
- `redditThread` exists on every entry (empty for now) and the "Discuss on Reddit" link is
  hidden when empty.
- No em dashes anywhere; plain hyphens only.
- The site's visual identity, layout and existing behaviour are otherwise unchanged.

## 7. Not in scope

- Do not post anything to Reddit (manual).
- Do not change the submit form or intake.
- Leave `redditThread` values empty; Matt fills them in as each thread goes live.
