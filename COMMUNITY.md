# Community and Intake Plan

How the Reddit community, the public intake form, and The British Hotspot Register
website fit together, and how to build each part. Written to be sliced into kanban
tickets via `docs/prompts/create-ticket.md`, the same way as everything else in
`PROJECT.md`.

---

## 1. The model

Three surfaces, one system.

- **Reddit** is the discussion layer: social, live, where people talk, argue, and post
  what they saw. Noisy by design.
- **The website (the Register)** is the record layer: curated, permanent, scored,
  documented. Quiet by design.
- **The intake form** is the pipe between them: how a raw report becomes a logged case.

The flow of a single report:

```
witness -> submit form (public)  ->  triage (you)  ->  GitHub issue (case ticket)
        ->  assets/js/data.js entry (Register)  ->  Reddit discussion thread
        ->  case links to thread, thread links to case
```

Reddit is where it is talked about. The site is where it is logged. Neither duplicates
the other; they cross-link.

## 2. The shared report schema (the backbone)

The same fields define a case everywhere. Build the Reddit report template, the intake
form, and the `SITES` record (see `data/schema.md`) from this one list so nothing is
re-keyed.

Public fields (safe to publish):
- Date and time of event
- Location: place name, nearest town, nation, coords if known
- Phenomenon type(s) - use the exact Register tag spellings (the current set is
  whatever `phenomena` values already appear in `assets/js/data.js` - check there
  before inventing a new tag, same rule as `data/schema.md` already states)
- Firsthand or secondhand
- Number of witnesses
- Duration
- Account (the narrative, in the witness's words)
- Conditions (weather, light, visibility) - helps prosaic-cause checks
- Prior explanations considered or ruled out - encourages discipline up front
- Evidence: photo / video / audio / physical / none, plus links

Private fields (never published; stored separately; consent-gated):
- Witness name and contact, for follow-up only
- Consent to log publicly (yes/no) and what may be shown

Mapping to the Register record: one submission usually becomes a `case` inside an
existing site, or a new site if it is a genuinely new cluster. Location maps to
`region`/`coords`, phenomenon type to `phenomena` tags, account to the case `desc`,
evidence and follow-up to `sources`. `strangeness` and `evidence` scores are set by
you at triage, not by the submitter - same editorial-not-verdict rule as everywhere
else in `PROJECT.md` section 6.

## 3. Reddit community design

### Positioning
UK-focused, evidence-first, and openly skeptical-friendly. The differentiator from the
big general subs is scope (Britain) and discipline (every report scored, rumour kept
visibly apart from attested cases). Do not try to out-scale r/UFOs; out-rigour it.

### Rules (these encode the evidence discipline)
1. Scope: British and Irish Isles reports and discussion.
2. Firsthand reports must be flagged as such and use the report template.
3. No AI-generated images, video, or text presented as genuine. Any AI tool used for
   analysis must be labelled.
4. Cite sources for factual claims. Never post fabricated or dead links.
5. Skepticism is welcome; ridicule is not. Credulity and mockery are both moderated.
6. Protect witnesses. No doxxing, no personal data, respect anonymity.
7. No low-effort posts, spam, or undisclosed self-promotion.
8. Represent others' accounts accurately. Do not embellish a report into a claim.

### Flair (mirror the Register)
- **Phenomenon flair**, matching the site tags currently in `assets/js/data.js`:
  UFO / Lights, Entity / Humanoid, Military, Physical Traces, Cryptid,
  Black-Eyed Child, Big Cat, Ghost / Haunting, Abduction, Animal Deaths,
  Crop Circles, Other. This list will drift as new sites and cases add tags -
  re-derive it from the live `phenomena` values rather than trusting this
  snapshot once the Register has grown.
- **Status flair**: Firsthand Report, Historical / Secondhand, News, Discussion,
  Question, Under Review, Logged to Register, Explained / Prosaic.

The last two status flairs are the bridge and the credibility signal. "Logged to
Register" links the thread to its case on the site. "Explained" is used proudly, not
grudgingly: a community that flags its own prosaic cases earns trust.

### Post templates
Provide a "Report a sighting" post template whose prompts are the public schema fields,
so a Reddit report and a form submission capture the same thing.

### AutoModerator
- Require flair on every post.
- Require the report template on posts flaired Firsthand Report.
- Filter very short posts and known low-quality or AI-image domains to the modqueue.
- Auto-comment the submission-form link and the rules on new reports.

### Wiki (pinned)
- About and mission, and how this links to the Register.
- How to submit a report (form link + what happens next).
- The two-axis scoring explained (Strangeness, Evidence, threshold 60).
- Full rules and removal reasons.
- Verification process for firsthand witnesses (optional, via modmail).

### Moderation
Start small. Recruit one or two trustworthy mods before opening. Define removal reasons
that match the rules. Moderate tightly in the first months; standards set early are what
a community keeps.

## 4. Intake pipeline

### The constraint
GitHub Pages serves static files only and cannot process a form POST. A plain HTML form
submits into the void. You need a hosted form backend: an endpoint the form sends to.

### Options
- **Web3Forms** - free tier around 250 submissions/month, unlimited forms, spam
  protection and hCaptcha, works client-side on a static site. Good portable default.
- **Formspree** - the other common default for GitHub Pages; easy setup.
- **Netlify Forms** - simplest only if you host on Netlify; ties form history to
  Netlify, so it is a poor fit while you are on GitHub Pages.
- **Google Forms into a Sheet** - zero-code fallback. Structured, free, easy to
  review. Trade-off: takes the witness off-site to Google.

Recommended: an on-site form styled to match the Register (same CSS custom properties
as `assets/css/styles.css` - `--ink`, `--amber`, `--mono`, etc, so it doesn't look
bolted-on), pointed at Web3Forms or Formspree, with fields exactly matching the public
schema. Google Forms if you want no build at all.

### The triage rail (fits the ticket workflow)
Accepted reports become logged cases via a **GitHub Issue Form**: a structured template
that mirrors the schema. Each accepted report becomes an issue labeled `case` (see
`docs/prompts/create-ticket.md`), which is a ticket on the kanban board, which Claude
Code turns into an `assets/js/data.js` entry per the Case/site definition of done in
`PROJECT.md` section 8.

- Public form (frictionless, no account) = the front door.
- GitHub Issue Form (needs an account) = the internal rail, not the public door.

Pipeline: form catches it -> you vet it -> issue opened with the `case` label ->
ticket moved through the board -> `assets/js/data.js` entry -> published -> Reddit
thread created and cross-linked.

## 5. Privacy and ethics

- **UK GDPR:** collecting names, locations, and contact details is handling personal
  data. Keep the public record anonymised. Store contact details privately and
  separately. Get explicit consent to publish, and default the form to anonymous with
  identifying detail opt-in. Honour deletion requests. (This is a flag, not legal
  advice; a short privacy note on the form is worth having.)
- **Logged is not endorsed.** Being on the Register means recorded, not verified. The
  Evidence score carries that: a case can sit at evidence 20, meaning "on file, thin."
  State this openly so the archive is never mistaken for a claim that all of it is real.
- **Consent for firsthand accounts.** Do not lift someone's Reddit post into the
  Register without asking. Ask, credit as they wish, and let them stay anonymous.

## 6. Launch sequence

1. Lock the subreddit name and basic settings (public, content options).
2. Build rules, flair sets, wiki, AutoModerator config, and the post template.
3. Build the on-site submit form + backend; build the GitHub "new case" issue form;
   test end to end with a dummy submission.
4. Seed: one discussion thread per existing Register site, each linking to its case.
   Pin an intro post and a "how to submit" post.
5. Cross-link: Register cases link to their threads; sidebar links to the Register and
   the submit form.
6. Recruit mods, open quietly, moderate tightly, grow slowly.

## 7. Backlog seeds (candidate tickets)

- Build the on-site "Submit a report" form (schema fields, styled to match, backend
  wired, spam protection, consent + privacy note).
- Create the GitHub Issue Form "New case / report" template mirroring the schema,
  labeled `case`.
- Write the subreddit rules, removal reasons, and wiki pages.
- Build the flair sets (phenomenon + status) and the "Report a sighting" post template.
- Write the AutoModerator config.
- Add a "Discuss on Reddit" link field to the `SITES` schema and render it on cards.
- Add a "Reported by / source" provenance line to cases, with anonymity respected.
- Seed threads for the existing ten sites and cross-link them.
- Draft the privacy note and consent wording for the form.
- Decide the verification process for firsthand witnesses.
