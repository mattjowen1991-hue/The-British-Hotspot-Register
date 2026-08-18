# open-ticket

Use this prompt to start work on an existing kanban card.

---

## Prompt

Paste this into a Claude Code session from `/Users/mattowen_1/projects/british-hotspot-register`, replacing ISSUE_NUMBER:

```
I want to work on ticket #ISSUE_NUMBER from The British Hotspot Register kanban board.

Please:

1. PREFLIGHT
   - Fetch the issue: gh issue view ISSUE_NUMBER --repo mattjowen1991-hue/The-British-Hotspot-Register
   - Read PROJECT.md for the project conventions (dashes, sourcing discipline, file
     structure, no-build-step constraint) and data/schema.md if the ticket touches data.
   - Read every file listed in the ticket's "Implementation notes" section.
   - Confirm you understand the goal and acceptance criteria before touching any code.

2. INVENTORY
   - List the exact files you will change and what change each needs.
   - A Case/site ticket should only touch assets/js/data.js - flag it if it looks
     like it needs more than that.
   - Flag any constraints: no dashes (em/en - hyphens only), never invent a source
     URL, keep data.js/render.js/main.js separated per PROJECT.md section 3.
   - If the scope is larger than expected, surface that before starting.

3. EXECUTION RULES
   - Work in a feature branch: git checkout -b feat/short-description
     (or fix/..., chore/... to match the ticket type)
   - One logical change per commit; commit message describes the WHY, references
     the ticket id
   - Never use em dashes or en dashes in any content or copy - hyphens only
   - Never invent a source URL - use a text-only source note if you can't stand
     behind a link
   - No build step, no framework, no npm dependency unless the ticket explicitly
     calls for one and explains why
   - Verify the page still opens correctly via file:// as well as a served page

4. MID-WORK DISCOVERIES
   If you find something broken or out of scope mid-task:
   - Fix obvious small things silently
   - Surface larger discoveries as a comment before changing direction - suggest
     a new ticket rather than expanding scope
   - Do not expand scope without agreement

5. HANDOFF
   When the work is done, output:

   ## Changes made
   - File: change summary

   ## How to verify
   Step-by-step check (open index.html directly, what to look for, any filters
   or cards to check)

   ## PR description draft
   Title: [feat|fix|chore]: short description
   Body:
   ### What
   ### Why
   ### Test plan
   - [ ] Opens correctly via file://
   - [ ] Opens correctly when served (e.g. python3 -m http.server)
   - [ ] Visual check: [what to look for]
   - [ ] No dashes introduced

   ## Next step
   Either: "ready for PR" or "needs your input on [specific decision]"
```

---

## Tips

- Move the ticket to "In Progress" on the board before starting (or ask Claude to do it):
  `gh project item-edit 2 --owner mattjowen1991-hue --url [ISSUE URL] --field "Status" --value "In Progress"`
- If the ticket has linked issues, read those too before starting
- The branch name should match the ticket title: `feat/map-view` not `feat/fix`
- After the PR is merged, use `close-ticket.md` to finalise
