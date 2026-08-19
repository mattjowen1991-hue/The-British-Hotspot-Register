# create-ticket

Use this prompt to create a new kanban card for The UK Hotspot Register.

---

## Prompt

Paste this into a Claude Code session from `/Users/mattowen_1/projects/british-hotspot-register`:

```
I want to create a new ticket for The UK Hotspot Register.

[DESCRIBE THE WORK YOU WANT TO DO IN 1-2 SENTENCES]

Please:

1. UNDERSTAND
   - Restate the goal in one sentence to confirm you've understood it.
   - Identify which ticket type this is: Case/site, Feature, Bug, or Upgrade/refactor
     (see PROJECT.md section 8 for what "done" looks like for each).
   - Identify which files are likely affected. A Case/site ticket should only ever
     touch assets/js/data.js.

2. VERIFY GROUND TRUTH
   - Read PROJECT.md and, if this touches site data, data/schema.md.
   - Read the relevant source files to confirm the current state before drafting.
   - Note any constraints: no dashes (em/en, hyphens only), never invent a source URL,
     no build step (must work via file:// and GitHub Pages), keep data/render/wiring
     split apart (section 3 of PROJECT.md).

3. DRAFT the ticket body in the 8-part shape from docs/prompts/README.md:
   ## Goal
   ## Context
   ## Acceptance criteria
   ## Implementation notes
   ## Out of scope
   ## Test plan
   ## Linked issues
   ## Labels

4. SHOW the draft to me and ask for approval before posting.

5. POST the ticket to GitHub:
   gh issue create \
     --repo mattjowen1991-hue/UK-Hotspot-Register \
     --title "[TICKET TITLE]" \
     --body "[TICKET BODY]" \
     --label "[LABELS]"

6. ADD TO BOARD
   After the issue is created, add it to the project board and set it to Backlog
   explicitly - item-add alone does not set a Status, which leaves the card
   invisible on the board view:
   gh project item-add 2 --owner mattjowen1991-hue --url [ISSUE URL]
   gh project item-edit 2 --owner mattjowen1991-hue --url [ISSUE URL] --field "Status" --value "Backlog"

7. SIGN OFF
   Output:
   - Issue URL
   - Issue number
   - Which column it landed in
   - One sentence confirming what will be built
```

---

## Tips

- Describe the work conversationally - Claude will shape it into the 8-part format
- If you already know the acceptance criteria, include them in your description
- Labels to use: `enhancement`, `bug`, `chore`, `case` (new site/case ticket), `documentation`
- A Case/site ticket's acceptance criteria should always include: all schema fields
  present, scores set, at least one source (or an honest text-only note), skeptical
  `notes` where relevant, no dashes
- The Session Prompts column is pinned - never add tickets there
