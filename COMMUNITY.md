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
witness -> report.html (Web3Forms, public + anonymous)  ->  your inbox
        -> you triage -> intake board card (GitHub issue, internal, see INTAKE-SETUP.md)
        -> accepted: one "add case" ticket created on the website board
        -> assets/js/data.js entry (Register)  ->  Reddit discussion thread
        -> case links to thread, thread links to case
```

Front door confirmed: the public entry point is the Web3Forms-backed form at
`report.html` (live). The GitHub Issue Form described in `INTAKE-SETUP.md` is not the
public door - it is your internal way of turning an accepted report into a structured
card on a separate intake board ("Report Intake and Triage"). The bridge from inbox to
intake board is manual (you create the card), and so is the bridge from intake board to
the website board: exactly one "add case" ticket, created when a report is accepted for
logging. Both are deliberate filters, not automation.

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

Chosen and live: an on-site form (`report.html`) styled to match the Register (same
CSS custom properties as `assets/css/styles.css` - `--ink`, `--amber`, `--mono`, etc,
so it doesn't look bolted-on), pointed at Web3Forms, fields matching the public schema,
access key set. Anonymous by default, contact opt-in and private. This was chosen over
starting with the GitHub Issue Form as the public door, to avoid the account barrier for
non-technical witnesses.

Caveat discovered live while testing (2026-08-18): Web3Forms sits behind Cloudflare bot
mitigation. That is good against spam, but automated/headless traffic gets a CORS-failing
challenge page instead of a real response - confirmed by reading the actual browser
console error, not just the generic "failed to send" message. A small number of genuine
visitors on unusual setups (strict-privacy browsers, some VPNs, in-app browsers) could
plausibly hit the same challenge occasionally. Do not solve this with added friction like
a visible captcha. If it turns out to be a real problem in practice, add a graceful
fallback in the error state (an email address to fall back to) rather than hardening the
form itself.

### The triage rail (fits the ticket workflow)
Accepted reports become logged cases via a **GitHub Issue Form** (see `INTAKE-SETUP.md`
for the full build): a structured, PII-free template that mirrors the schema. This is
NOT the same board as the website's kanban - it is a separate "Report Intake and Triage"
board, so incoming-report triage never clutters the engineering board. Each accepted
report becomes an issue labeled `report` on the intake board; when it is judged worth
logging, that crosses over as exactly one new `case`-labeled ticket on the website board
(via `docs/prompts/create-ticket.md`), which Claude Code turns into an
`assets/js/data.js` entry per the Case/site definition of done in `PROJECT.md` section 8.

- Public form (`report.html`, frictionless, no account) = the front door.
- GitHub Issue Form (needs an account) = the internal intake rail, not the public door.
- The intake board and the website board are deliberately separate; a report only
  crosses over once, as a single ticket, when accepted.

Pipeline: form catches it -> you vet it -> intake issue opened with the `report` label
-> triaged on the intake board -> accepted reports get one `case`-labeled ticket on the
website board -> `assets/js/data.js` entry -> published -> Reddit thread created and
cross-linked.

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
- **GitHub issues are public.** The intake issue form must never carry names, contact
  details, or other PII - that channel is `report.html`, kept private and separate, not
  the public issue tracker. See `INTAKE-SETUP.md` section 1.

## 6. Launch sequence

1. ~~Build the on-site submit form + backend.~~ Done: `report.html`, live on Pages,
   linked from the masthead.
2. ~~Build the GitHub intake issue form and the Report Intake and Triage board.~~ Done -
   see `INTAKE-SETUP.md`.
3. Lock the subreddit name and basic settings (public, content options).
4. Build rules, flair sets, wiki, AutoModerator config, and the post template.
5. Seed: one discussion thread per existing Register site, each linking to its case.
   Pin an intro post and a "how to submit" post.
6. Cross-link: Register cases link to their threads; sidebar links to the Register and
   the submit form.
7. Recruit mods, open quietly, moderate tightly, grow slowly.

## 7. Backlog seeds (candidate tickets)

- ~~Build the on-site "Submit a report" form.~~ Done: `report.html`.
- ~~Create the GitHub Issue Form intake template and the intake board.~~ Done - see
  `INTAKE-SETUP.md`.
- Write the subreddit rules, removal reasons, and wiki pages.
- Build the flair sets (phenomenon + status) and the "Report a sighting" post template.
- Write the AutoModerator config.
- Add a "Discuss on Reddit" link field to the `SITES` schema and render it on cards.
- Add a "Reported by / source" provenance line to cases, with anonymity respected.
- Seed threads for the existing ten sites and cross-link them.
- Draft the privacy note and consent wording for the form. (Partially done: `report.html`
  already has a consent section; a fuller standalone privacy note is still open.)
- Decide the verification process for firsthand witnesses.
- If the Cloudflare/Web3Forms challenge (section 4) turns out to affect real visitors,
  add a graceful email fallback in the error state.
