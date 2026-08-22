# Register House Style

How every hotspot entry and case is written. Hand this to any editor, human or AI,
before they draft or rewrite an entry. The goal: entries that are credible first and
gripping second. Short enough to hold attention, honest enough to trust, good enough to
share.

---

## The voice

- **Convey the incredible credibly.** The material is extraordinary; the telling is
  sober. Authority comes from restraint, not hype. We are the calm voice in a loud room.
- **Adjectives are the enemy.** "Eerie," "chilling," "mysterious" tell the reader what to
  feel and so do the opposite. Let the facts do the frightening. A named time, a named
  place, one specific detail beats any adjective.
- **Say when we don't know.** Uncertainty stated plainly is a strength, not a weakness.
  It is what separates us from the tabloids. "No one has explained this" lands harder than
  pretending we have.
- **Never promote rumour to fact.** The scores carry the epistemic weight. The prose
  reports; it does not believe and it does not debunk.
- **Concrete over vague, always.** "A beam of light came down toward the weapons store"
  beats "strange lights were seen."

## The shape of an entry

Keep it tight: aim for 150 to 250 words of narrative. Long enough to grip, short enough
to finish in one sitting.

1. **The facts strip.** The scannable hard info the card already shows: place, date,
   phenomena, witnesses, status, scores. The "where and when." Never bury it, never
   dramatise it.
2. **The hook (1 to 2 sentences).** Drop the reader into the strangest true moment, not
   the chronological start. Its only job is to earn the next ten seconds. The object over
   the runway, the child at the window, the light on the hillside.
3. **The account (2 to 3 short paragraphs).** What happened, told with momentum, not as a
   timeline dump. Every sentence earns its place; aim for one point of interest per line.
4. **The turn.** The honest bit. The mundane candidate, the dispute, what stays
   unresolved. Give the prosaic explanation its fair due, then say plainly what it does
   and does not cover. This is where trust is built.
5. **The kicker.** End on the resonant unresolved question, or the one detail that
   lingers. Do not trail off. Land it.

## Sourcing and the "further reading" block

We track and route; we do not house everything. Each entry ends with two to four vetted
outbound links so the reader can go deeper at reputable places.

- **You vouch for what you link.** A bad link on a credibility-first site is worse than no
  link.
- Every source carries a label, a one-line note on what it is and why it is there, and a
  strength tier (see schema).
- **Prefer primary and established:** national archives, official releases, coroners'
  reports, established media, academics, specialist investigators with a real track
  record.
- **Weak sources** (an enthusiast blog, a single-researcher site) appear only when they
  are the best that exists, and must be visibly marked as lower-confidence, never dressed
  up as authoritative.
- Where reputable sourcing is thin, say so. "Limited independent sourcing exists" is an
  honest, credibility-building line, not an embarrassment.

## Sources schema (the data-model change)

Each source becomes an object, not a bare link:

```js
sources: [
  {
    label: "The National Archives",
    url: "https://...",
    note: "The declassified MoD file on the case.",
    strength: "primary"   // "primary" | "reputable" | "weak"
  }
]
```

- `strength: "primary"` - official, archival, coroner, or a primary document.
- `strength: "reputable"` - established media, academic, specialist investigator.
- `strength: "weak"` - enthusiast or single-source; renders with a caution marker.

Card render: show the label and note; show strength as a small tag or dot. A `weak`
source renders with a muted "lower-confidence source" marker so the reader is never
misled. Where a whole entry is thin, show a one-line "limited independent sourcing" note.
(This is its own build ticket: the schema change plus the card render.)

## Pre-publish checklist

- Facts strip accurate and scannable.
- Opens on a real, arresting moment, not a definition.
- Under about 250 narrative words; nothing padded.
- No adjective doing a fact's job.
- The mundane explanation given fairly.
- At least one honest "we don't know."
- Every link vetted and tiered; weak ones marked.
- Ends on something that lingers.
- No em dashes; plain hyphens only.

## The difference, in one line

Weak: "The eerie, chilling Rendlesham incident is Britain's most mysterious and
terrifying UFO encounter, baffling experts for decades."

Strong: "Just after 3am, three American airmen walked into Rendlesham Forest to
investigate what they thought was a downed aircraft. What they found, they could not
explain."
