# SITES record schema

Every entry in `assets/js/data.js`'s `SITES` array is one object with the
following fields. Reuse existing `phenomena` tag spellings exactly - tags
are collected across all sites to build the filter chips automatically, so
a near-duplicate tag (e.g. "UFO" alongside "UFO / Lights") splits what
should be one filter into two.

| Field | Type | Notes |
|---|---|---|
| `id` | string | Short case code shown top-left, e.g. `"UK-011"`. |
| `name` | string | Site name. |
| `nation` | string | One of `"England"`, `"Scotland"`, `"Wales"`. |
| `region` | string | County / area line. |
| `coords` | string | Rough `"lat, long"`, e.g. `"52.09, 1.44"`. Reserved for a future map view. |
| `period` | string | Active date range, free text. |
| `phenomena` | string[] | Tags. Reuse existing spellings from other sites where the phenomenon matches. |
| `tier` | string | One of `"documented"`, `"mixed"`, `"volume"`, `"single"`, `"explained"`, `"contested"`. Drives the standing stamp and pip icon. |
| `strangeness` | integer 0-100 | Axis A: how anomalous and varied the phenomena are. |
| `evidence` | integer 0-100 | Axis B: witness calibre, contemporaneous records, physical traces, independence from tabloid amplification. |
| `summary` | string | The narrative, original wording, house-style shape (hook, account, honest turn, kicker). `<strong>` is the only inline tag allowed - it is the only tag `rich()` in `render.js` unescapes. |
| `cases` | `{ year, title, desc }[]` | Key incidents on file for the site. |
| `notes` | string (optional) | Skeptical / context line. Omit the field entirely if there's nothing to add - the card only renders a notes block when it's present. |
| `sources` | `{ label, url?, note?, strength }[]` | `strength` is `"primary"` \| `"reputable"` \| `"weak"`. Omit `url` for a text-only source note (no invented links). A `weak` source renders with a muted "lower-confidence source" marker. |
| `prosaic` | `{ explanation, why, sources: { label, url?, strength }[] }[]` (optional) | One mundane candidate per item, with a one-line reason it's plausible and its own source(s). Renders as a "Prosaic explanations" expander below the notes block. |
| `redditThread` | string | URL of the case's Reddit discussion thread, `""` if not posted yet. Renders a "Discuss on Reddit" link only when non-empty. |

## Tier standing

| `tier` value | Stamp label | Pip |
|---|---|---|
| `documented` | Well-documented | solid |
| `mixed` | Mixed | half-filled |
| `volume` | Volume-driven | half-filled |
| `single` | Single-source | hollow |
| `explained` | Likely explained | half-filled |
| `contested` | Contested | hollow |

## Conventions

- Each card renders with `id="<id>"` (e.g. `id="UK-004"`), so `/#UK-004` deep-links
  straight to that entry. Keep `id` values unique and stable once published.
- Plain hyphens only, never em dashes or en dashes.
- Never invent a source URL. A text-only source note (label with no `url`)
  is always preferable to a fabricated link.
- No verbatim copying from source articles - summaries are original wording.
- Separate what is well-attested from what is amplified or single-sourced,
  and put the honest caveat in `notes` rather than upgrading a rumour into
  a fact.
