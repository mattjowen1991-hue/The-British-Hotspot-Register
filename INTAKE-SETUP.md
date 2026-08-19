# Intake Setup Brief (for Claude Code)

Goal: stand up the report-intake pipeline for The British Hotspot Register. This is
separate from the website engineering board. Read `PROJECT.md` and `COMMUNITY.md` first
for context, especially the shared report schema.

Do only what is described here. Do not touch `index.html` or existing site data in this
ticket.

---

## Status: built (2026-08-19)

Everything in this brief is done except the one step that genuinely cannot be
scripted. Confirmed the auto-add workflow has no GraphQL create/update mutation
(only `deleteProjectV2Workflow` exists) before deferring to the manual step below,
rather than just taking the brief's word for it.

- `.github/ISSUE_TEMPLATE/report.yml` and `config.yml`: committed. Phenomenon dropdown
  has all 12 live tags (11 from `assets/js/data.js` plus `Other`).
- Labels `report`, `report:accepted`, `report:explained`, `report:rejected`: created.
- Intake board: [Report Intake and Triage](https://github.com/users/mattjowen1991-hue/projects/3),
  project #3, linked to this repo. Six Status options and all seven custom fields
  (Phenomenon, Nation, Firsthand, Strangeness, Evidence, Register ID, Reddit thread) are
  live and confirmed working - a test issue (#4) had every field type set (single-select,
  number, text) and read back correctly, then the issue was closed.
- **Still needs a manual step from Matt:** the "auto-add issues labelled `report` to
  this board" workflow. Go to the [Report Intake and Triage](https://github.com/users/mattjowen1991-hue/projects/3)
  board -> `...` menu (top right) -> Workflows -> "Auto-add to project" -> add a filter
  `label:report` -> enable. Until this is done, new intake issues need `gh project
  item-add 3 --owner mattjowen1991-hue --url <issue URL>` (or manual add in the UI) to
  reach the board.
- The `config.yml` "Community rules" contact link still has a `REPLACE_WITH_SUBREDDIT_URL`
  placeholder - genuinely pending, no subreddit exists yet.

---

## 0. Decision recap

The PUBLIC front door is the Web3Forms-backed web form at `report.html` (already live,
access key set). Public reports arrive in the owner's inbox, not as GitHub issues.

The GitHub Issue Form built here is therefore NOT the public door. It is the owner's
internal tool: once an emailed report is judged worth tracking, the owner opens an issue
from this form to create a clean, structured card on the intake board. This keeps the
public path frictionless while the triage record stays structured.

There are two boards:
- **Website board** (already exists - "The British Hotspot Register", project #2):
  engineering, features, bugs, infrastructure, and `case` tickets for logged sites.
- **Intake board** (this brief - "Report Intake and Triage"): incoming reports and
  their triage.

A report crosses from the intake board to the website board exactly once: when it is
accepted for logging, create one "add case to data.js" ticket on the website board.

The inbox-to-board bridge is manual (the owner creates the card). No automatic public
issue creation. That is intended: it keeps the owner as the deliberate filter.

## 1. Important privacy constraint (read before building)

GitHub issues are PUBLIC. The Issue Form below must NOT collect any personal data:
no names, no addresses, no contact details, no email or phone. Witness contact belongs
in a private channel (the public web form or modmail), never in a public issue. Build
the form so that anonymity is the default and the submitter confirms no PII is included.

## 2. GitHub Issue Form

Create `.github/ISSUE_TEMPLATE/report.yml`. The phenomenon dropdown must match the
tags actually live in `assets/js/data.js` (check there before hand-copying this list -
it drifts as sites are added), not a fixed snapshot:

```yaml
name: "Sighting / experience report"
description: "Log a British high-strangeness report for review. Public and anonymous. Do not include personal details."
title: "[Report] "
labels: ["report"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for submitting a report. This issue is PUBLIC. Do not include your name,
        address, email, phone, or anyone else's. If you are willing to be contacted for
        follow-up, use the private form (report.html) or modmail instead, not this box.
  - type: input
    id: datetime
    attributes:
      label: Date and time of event
      placeholder: "e.g. 2016-02-26, around 10pm"
    validations:
      required: true
  - type: input
    id: location
    attributes:
      label: Location (place and nearest town)
      placeholder: "e.g. Pentyrch, near Cardiff"
    validations:
      required: true
  - type: dropdown
    id: nation
    attributes:
      label: Nation
      options: ["England", "Scotland", "Wales", "Northern Ireland", "Other / at sea"]
    validations:
      required: true
  - type: input
    id: coords
    attributes:
      label: Approximate coordinates (if known)
      placeholder: "e.g. 51.53, -3.28"
    validations:
      required: false
  - type: dropdown
    id: phenomena
    attributes:
      label: Phenomenon type(s)
      multiple: true
      options:
        - "UFO / Lights"
        - "Entity / Humanoid"
        - "Cryptid"
        - "Big Cat"
        - "Black-Eyed Child"
        - "Ghost / Haunting"
        - "Abduction"
        - "Animal Deaths"
        - "Military"
        - "Physical Traces"
        - "Crop Circles"
        - "Other"
    validations:
      required: true
  - type: dropdown
    id: account_type
    attributes:
      label: Is this firsthand or secondhand?
      options: ["Firsthand (I witnessed it)", "Secondhand (I heard / read it)", "Historical"]
    validations:
      required: true
  - type: input
    id: witnesses
    attributes:
      label: Number of witnesses
      placeholder: "e.g. 3"
    validations:
      required: false
  - type: input
    id: duration
    attributes:
      label: Roughly how long did it last?
      placeholder: "e.g. 2 minutes"
    validations:
      required: false
  - type: textarea
    id: account
    attributes:
      label: What happened?
      description: "In your own words. As much detail as you can, in the order it happened."
    validations:
      required: true
  - type: input
    id: conditions
    attributes:
      label: Conditions (weather, light, visibility)
      placeholder: "e.g. clear, dark, no moon"
    validations:
      required: false
  - type: textarea
    id: ruled_out
    attributes:
      label: Ordinary explanations you have already considered or ruled out
      description: "e.g. aircraft, drones, planets, lanterns. Helps us assess it fairly."
    validations:
      required: false
  - type: textarea
    id: evidence
    attributes:
      label: Evidence links (photo, video, audio)
      description: "Paste links only. Do not upload anything containing personal detail."
    validations:
      required: false
  - type: checkboxes
    id: consent
    attributes:
      label: Confirmations
      options:
        - label: "This report contains no personal contact details for me or anyone else."
          required: true
        - label: "I consent to this being logged publicly and anonymously on the Register."
          required: true
```

Also create `.github/ISSUE_TEMPLATE/config.yml`:

```yaml
blank_issues_enabled: false
contact_links:
  - name: Private report (with contact details)
    url: https://mattjowen1991-hue.github.io/The-British-Hotspot-Register/report.html
    about: Use this if you are happy to be contacted for follow-up. Not public.
  - name: Community rules
    url: https://REPLACE_WITH_SUBREDDIT_URL
    about: Read before posting or reporting.
```

The private-report link is already resolved - `report.html` has its own optional,
private "About you" section, so it does not need a separate URL. Leave the subreddit
REPLACE_WITH placeholder; Matt will fill it in once the subreddit exists.

## 3. Labels

Create these repo labels (via `gh label create`, skip any that already exist):
- `report` - marks an intake ticket.
- `report:accepted` - cleared for logging.
- `report:explained` - resolved as prosaic, kept for transparency.
- `report:rejected` - not logged.

Board Status handles the day-to-day stages; these labels are for filtering the issues
list and for the auto-add workflow.

## 4. The intake board (GitHub Project v2)

Board name: **Report Intake and Triage**

Status column options (in order):
1. New / unreviewed
2. Vetting
3. Needs info
4. Accepted - to log
5. Logged
6. Rejected / explained

Custom fields to add:
- `Phenomenon` (single select: same options as the form)
- `Nation` (single select: England, Scotland, Wales, Northern Ireland, Other)
- `Firsthand` (single select: Firsthand, Secondhand, Historical)
- `Strangeness` (number) - set at vetting, 0-100
- `Evidence` (number) - set at vetting, 0-100
- `Register ID` (text) - the UK-0xx once logged
- `Reddit thread` (text) - discussion URL

### How to build it

`gh` can manage Projects v2, but it needs the `project` scope on the token, which the
default login often lacks. Do this:

1. Check scope: run `gh auth status`. If `project` is missing, run
   `gh auth refresh -s project --hostname github.com` and tell Matt to approve it in the
   browser. If you cannot complete the browser step, STOP the board automation and hand
   Matt the manual steps below instead.
2. With scope granted, create the board and fields using `gh project` commands
   (`gh project create`, `gh project field-create`, etc.) under Matt's account.
3. The "auto-add issues labelled `report` to this board" behaviour is a built-in Project
   workflow toggled in the Project's Workflows settings in the web UI. This is not
   reliably scriptable, so give Matt the exact click path rather than attempting it:
   Project -> ... menu -> Workflows -> "Auto-add to project" -> filter `label:report` ->
   enable.

### Manual fallback (if CLI scope is blocked)

Give Matt this checklist to do in the GitHub UI, and do the file-based parts (issue form,
labels) yourself regardless:
- New Project (Board layout), name it "Report Intake and Triage".
- Rename the Status options to the six above.
- Add the custom fields listed above.
- Workflows -> Auto-add to project -> filter `label:report` -> enable.

## 5. Definition of done

- `.github/ISSUE_TEMPLATE/report.yml` and `config.yml` committed, PII-free, dropdowns
  match the schema taxonomy exactly.
- Labels created.
- Intake board exists with the six Status options and the custom fields, OR Matt has the
  manual checklist if scope was blocked.
- Auto-add workflow enabled (or handed to Matt as a UI step).
- A test issue created from the form lands on the board, then close it.
- `index.html` and site data untouched.

## 6. Not in scope (do not attempt)

- The public web form. Done separately - see `report.html` and `COMMUNITY.md`.
- Anything on Reddit (subreddit, flair, AutoModerator) - not a Claude Code task.
- Editing the Register data or the site itself.
