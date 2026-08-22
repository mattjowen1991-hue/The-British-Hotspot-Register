# Subreddit Asset Pack

Everything needed to stand up the community, ready to paste into Reddit section by
section. Built for handle **r/thebhregister**, display title **The British Hotspot
Register**. If that handle turns out to be taken, pick a fallback and find-and-replace
`thebhregister` throughout this file; nothing else changes.

Contact / role inbox: thebhregister@gmail.com (also the form fallback address).

---

## 1. Identity

- **Handle:** r/thebhregister (type it as theBHRegister for legible casing)
- **Display title:** The British Hotspot Register
- **Community topics (set at creation, this is what search actually reads):**
  primary Paranormal; add UFOs and Aliens, and Mysteries / Unexplained if offered.
- **Short description (tagline, under the name):**
  Britain's field archive of high strangeness. Report what you saw, discuss what others
  saw, and see it logged on the Register.
- **About / sidebar text:**
  A serious, UK-focused record of paranormal, UAP, and cryptid hotspots. We log reports
  to a public Register at theparanormalpad.com, scored on two axes: Strangeness and
  Evidence Quality. Skepticism is welcome here; so are firsthand accounts. Logged does
  not mean endorsed: recording a report is not the same as verifying it.
  Register: [link] · Submit a report: [link to report.html] · Rules: [wiki link]

## 2. Rules (paste each as name + description)

1. **British and Irish reports only.**
   Posts should concern the British Isles. Elsewhere belongs in the larger general subs.
2. **Firsthand accounts must be flagged and use the format.**
   If you witnessed it, use the Firsthand Report flair and the report template. It keeps
   accounts consistent and loggable.
3. **No AI-generated content passed off as real.**
   No AI images, video, or text presented as genuine. If you used an AI tool to analyse
   something, say so.
4. **Cite sources; no fabricated links.**
   Factual claims need a source. Dead or invented links are removed.
5. **Skepticism is welcome; ridicule is not.**
   Question anything. Mock no one. Both blind belief and contempt get moderated.
6. **Protect witnesses; no personal data.**
   No doxxing, no posting anyone's identity or contact details, respect anonymity.
7. **No spam or undisclosed self-promotion.**
   Share your own work sparingly and disclose it. This is not a traffic funnel.
8. **Represent accounts accurately.**
   Do not embellish someone's report into a claim it never made.

## 3. Flair

Reddit allows ONE post flair per post, so this is a single set that covers post type and
credibility status. Phenomenon type (UFO, cryptid, etc.) goes in the title and the report
template, not the flair, because a post cannot carry two flairs.

### Post flair set (users pick the first few; mods apply the last three)
- Firsthand Report (amber)
- Sighting Discussion (blue)
- Historical (grey)
- News / Article (teal)
- Question (purple)
- Analysis (slate)
- Under Review (yellow) - mod applied
- Logged to Register (green) - mod applied, links to the case on the site
- Explained / Prosaic (muted) - mod applied, used with pride

"Logged to Register" and "Explained / Prosaic" are the bridge and the credibility signal.
A community that flags its own solved cases earns trust.

### Title convention for phenomenon (put in the wiki and the template)
Ask posters to prefix titles with the phenomenon in brackets, e.g.
`[UFO / Lights] Bonnybridge, 1992 - three lights over the hill`. Use the same vocabulary
as the Register: UFO / Lights, Cryptid, Entity / Humanoid, Black-Eyed Child, Big Cat,
Ghost / Haunting, Abduction, Animal Deaths, Military, Physical Traces, Crop Circles, or
Other.

### User flair (optional, mod-granted)
- Verified firsthand witness
- Field investigator
- Researcher
- Skeptic

## 4. Post flair requirement and AutoModerator

Use Reddit's NATIVE setting to require flair (Mod Tools -> Content Controls -> require
post flair). Automod enforcement of flair fires before users can add it, so the native
toggle is the reliable route. Use AutoModerator for the rest.

Paste into the automod config wiki page (r/thebhregister/wiki/config/automoderator).
Automod syntax is finicky, so test each rule with the automod testing tool before relying
on it.

```yaml
---
# Auto-comment on firsthand reports: point them at the form and the rules
type: submission
flair_text: "Firsthand Report"
comment_stickied: true
comment: |
    Thanks for sharing a firsthand account.

    - To have this logged on the Register, submit it through the form: [SUBMIT_FORM_URL]
    - Please keep personal details out of the public post.
    - If you can add location, date, duration, and conditions, do.

    A mod will review it. If it is logged, your post gets the "Logged to Register" flair.
---
# Filter very short self-posts for review
type: submission
is_self: true
body_shorter_than: 150
action: filter
action_reason: "Very short, held for review"
comment: |
    Your post was held for a quick mod check because it is short. Add a little more
    detail (what, where, when, how long) and it will be approved.
---
# Filter flagged low-quality or AI-image domains (expand this list over time)
type: submission
domain:
    - "REPLACE_WITH_FLAGGED_DOMAIN.com"
action: filter
action_reason: "Flagged domain, review"
---
# Route posts reported as AI-generated straight to the modqueue
type: any
reports: 1
report_reason (includes, case-insensitive): ["ai", "fake", "generated"]
action: filter
action_reason: "Reported as AI/fake"
---
```

Replace `[SUBMIT_FORM_URL]` and `REPLACE_WITH_FLAGGED_DOMAIN.com` before saving.

## 5. Wiki pages

### index (About and mission)
The British Hotspot Register is a serious, UK-focused record of high-strangeness
hotspots: places where paranormal, UAP, and cryptid reports cluster. Discussion happens
here on Reddit. The permanent record lives on the Register at theparanormalpad.com, where
every site is scored on two axes and sorted by how well it holds up.

Logged is not endorsed. A report being on the Register means it is recorded, not that it
is verified. The Evidence score carries that: a case can sit low and still be logged.

Register: [link] · Submit a report: [link] · Rules: [link] · Scoring: [link]

### How to submit a report
Two ways in. Post it here with the Firsthand Report flair and the template below, or send
it privately through the form at [SUBMIT_FORM_URL]. The form is anonymous by default;
your name and contact are optional and never published. Accepted reports are logged on
the Register and, where there is a discussion thread, cross-linked to it.

### The scoring explained
Every site and case is rated on two independent axes:
- Strangeness (A): how anomalous and how varied the reported phenomena are.
- Evidence Quality (B): witness calibre, contemporaneous records, physical traces, and
  independence from tabloid amplification.
The working threshold for "worth serious follow-up" is 60. The two axes are kept
separate on purpose: a case can be wildly strange and thinly evidenced, or mundane and
well recorded.

### Verification (optional)
Firsthand witnesses who want a "Verified firsthand witness" flair can message the mods.
Verification is light and private; we never publish what you share to prove it.

## 6. Report post template

Give this as post guidance and pin it. It mirrors the site schema so a Reddit report and
a form submission capture the same thing. Remind posters: no personal contact details in
a public post.

```
**Title:** [Phenomenon] Location, year - one line

**Date and time:**
**Location (place / nearest town / nation):**
**Approx coordinates (if known):**
**Firsthand or secondhand:**
**Number of witnesses:**
**Duration:**
**Conditions (weather, light, visibility):**

**What happened:**
(In your own words, in order.)

**Ordinary explanations you have already ruled out:**

**Evidence (links only):**
```

## 7. Pinned posts (two)

1. **Start here.** Mission, the logged-is-not-endorsed line, the rules in brief, and the
   three links (Register, submit form, scoring). Keep it short.
2. **How to report + the ten seed cases.** The template, plus a linked index of the ten
   Register sites as their own discussion threads, so day one has something to engage
   with and sets the standard for tone.

## 8. Cross-linking checklist

- Sidebar: link to the Register and the submit form.
- Each Register case card: a "Discuss on Reddit" link using the `redditThread` field in
  data.js (add that field if it is not in yet). This is the site-to-Reddit half of the
  bridge.
- Each seeded thread: link back to its case on the Register.
- The "Logged to Register" flair: link it to the case.

## 9. Launch and moderation

1. Create the sub, confirm the handle, set identity and topics.
2. Add rules, flair sets, the native flair requirement, and the automod config.
3. Build the wiki pages and the two pinned posts.
4. Seed one thread per Register site (ten), cross-linked both ways.
5. Recruit one or two trustworthy mods before opening up.
6. Moderate tightly for the first months. The standard you set early is the one the
   community keeps. Cross-post a couple of the strongest seed threads into r/UFOs and
   r/HighStrangeness for initial reach.
