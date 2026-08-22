# Content Pipeline: board and the research prompt

How new Register entries and Reddit posts get made, for both editorial ideas and public
submissions, through one vetted pipeline.

---

## Setup prerequisites (do these first)

Two things must be true before the research prompt below will work:

1. **Commit the reference docs.** These already exist; they just are not in the repo yet.
   Commit at least `HOUSE-STYLE.md` (next to `PROJECT.md`). Also commit `CONTENT-PASS.md`,
   `CONTENT-PASS-2.md` and `PROSAIC.md`, because the website-seed ticket reads them.
2. **Run the website-seed ticket.** Once it has populated `data.js` with the ten finished
   entries, `data.js` itself becomes the worked-example corpus the prompt leans on.

So the order is: commit the docs, run WEBSITE-SEED, then the research prompt is ready.

## The board (repurpose your existing project #3, do not make a new one)

You already built project #3, "Report Intake and Triage," with Status, Phenomenon and
Nation fields. Rather than create a second board and orphan that one, evolve #3 into the
**Content Pipeline**. It handles everything that ends in a published entry plus a Reddit
thread, whoever started it, so it absorbs the intake role instead of duplicating it.

Changes to make to #3:
- **Rename** it to "Content Pipeline".
- **Set the Status columns** to: Ideas & Inbox, Researching / Vetting, Drafting, Review,
  Ready to Publish, Published. (Map any existing intake statuses across: New -> Ideas &
  Inbox, Vetting -> Researching / Vetting, Accepted -> Drafting, Logged -> Published.)
- **Add fields** it does not have yet: Source (single select: Editorial, Submission),
  Case ID (text), Reddit thread (text), Strangeness (number), Evidence (number). Keep the
  Phenomenon and Nation fields it already has.
- **Delete the test item.**

Column meanings:
1. **Ideas & Inbox** - editorial topics to research, and new form submissions to triage.
2. **Researching / Vetting** - actively researching and checking sources.
3. **Drafting** - the entry and the Reddit post are being written.
4. **Review** - drafted, waiting for your human check. The vetting gate.
5. **Ready to Publish** - approved, queued to go live.
6. **Published** - live on the Register, Reddit thread posted, `redditThread` linked.

Pin the reusable prompt below as a card, the same way you pin create-ticket / open-ticket /
close-ticket on the engineering board. To make a new entry: copy it, fill in the event, run
it in Claude Code.

Why one board, not two: your editorial tickets and the public submissions are the same
pipeline with two front doors. Both become a vetted entry plus a thread through the same
stages. One board keeps everything in one vetted view.

---

## The prompt (pin this as a Session Prompt card; run in Claude Code)

```
PROMPT: research-new-event

You are drafting a new entry for the UK Hotspot Register and its matching Reddit post.
Work to the project's own standard, not a generic one.

EVENT TO RESEARCH: <fill in, e.g. "the Cosford Incident, RAF Cosford, 1993">

First, read these in the repo for voice, schema and worked examples:
- HOUSE-STYLE.md   (the editorial standard - follow it exactly)
- assets/js/data.js   (the entry schema AND the finished entries; these are your worked
                       examples for voice, tiered sources and prosaic structure)
- CONTENT-PASS-2.md and PROSAIC.md are additional worked examples if present, but data.js
  is the source of truth for format. Do not fail if those two files are absent.

Then do this, in order:

1. RESEARCH. Find the best available sources on the event. Open each one; never cite
   anything you have not actually read. Establish the hard facts: location, nearest town,
   nation, approximate coordinates, date(s), phenomena (use the Register's existing tag
   vocabulary), number and type of witnesses, and what was reported.

2. VET AND TIER THE SOURCES. Prefer primary (official, archival, coroner, seismic), then
   reputable (established media, academic, specialist investigator with a track record).
   Include a weak source (enthusiast or single-researcher) only if it is the best that
   exists, and mark it weak. If reputable sourcing is thin, say so plainly. Never fabricate
   a URL or an attribution.

3. SCORE IT. Give Strangeness (A) and Evidence Quality (B), each 0-100, each with one line
   of justification. If evidence is negligible and there is no credible sourcing at all,
   flag the event as a possible REJECT rather than forcing an entry in. Logged is not
   endorsed, but the register still has a floor.

4. DRAFT THE REGISTER ENTRY, to HOUSE-STYLE.md: a hook that opens on the strangest true
   moment, a short account with momentum, an honest turn that gives the mundane explanation
   its fair due, and a kicker. 150 to 250 words. Adjectives are the enemy; let the facts
   carry it; say plainly where we do not know. Then produce, as data.js-ready objects:
   - the tiered `sources` array: { label, url, note, strength }
   - the `prosaic` array: { explanation, why, sources: [ { label, url, strength } ] },
     one mundane candidate per item with a one-line why-it-is-plausible and its source.
   Assign the next free UK-0xx id and a tier.

5. DRAFT THE MATCHING REDDIT POST, to the seed format used in REDDIT-POSTS.md: the correct
   flair, a [Phenomenon] title, the narrative, the prosaic bullets, a Sources line, the
   "Logged on the Register as <tier>, Strangeness X / Evidence Y" line with the /#UK-0xx
   link, and a regional call to action.

6. OUTPUT AS DRAFTS, NOT LIVE. Create a branch; write the new entry into data.js on that
   branch only (do not push to main); write the Reddit post to /reddit-drafts/UK-0xx.md.
   This keeps everything vettable before it goes live.

7. MOVE THE CARD. Move this kanban card to the "Review" column (NOT Published). Add a
   comment summarising: the two scores and why, the source tiers with any weak-source
   flags, and anything you were unsure about. Matt reviews, then publishes and moves the
   card to Published himself.

HOUSE RULES: plain hyphens only, never em or en dashes. If the case is thin, the honest low
score and the weak-source marks are the point, not a failure. Do not oversell.
```

---

## The full loop, once this is running

1. You drop a card in Ideas & Inbox (or a submission lands there), Source set accordingly.
2. Copy the prompt, fill in the event, run it in Claude Code.
3. Claude Code researches, drafts the entry and the Reddit post on a branch, and moves the
   card to Review with its summary.
4. You vet: check the sources, sanity-check the scores, read the prose. Adjust if needed.
5. You merge the branch (entry goes live on the Register), post the Reddit thread, put the
   thread URL in the entry's `redditThread` and the card's Reddit thread field, and move the
   card to Published.

The human gate at step 4 is the whole point. Everything upstream of it can be automated;
that step stays yours.
