# Session Prompts

Three Claude Code prompts that drive the kanban workflow for this project.
Each ticket on the GitHub Projects board IS a Claude-executable prompt written in the shape below.

## How to use

1. **Start a Claude Code session** in `/Users/mattowen_1/projects/british-hotspot-register`
2. **Paste the relevant prompt** from this folder into the chat
3. Claude reads the board, runs the prompt, and guides you through the workflow

---

## The 8-part ticket shape

Every kanban card body follows this structure so Claude can parse and execute it:

```
## Goal
One sentence. What this ticket achieves.

## Context
Why this work is needed. Relevant files, known constraints, or prior decisions.

## Acceptance criteria
- [ ] Bullet list of what "done" looks like

## Implementation notes
Key files to touch, approach hints, gotchas to avoid.

## Out of scope
What this ticket explicitly does NOT include.

## Test plan
How to verify the work (open index.html directly, check on a served page, no dashes, etc.).

## Linked issues
#N - parent or related ticket numbers

## Labels
e.g. enhancement, bug, chore, case, documentation
```

---

## Prompt files

| File | When to use |
|---|---|
| `create-ticket.md` | You want to create a new kanban card |
| `open-ticket.md` | You want to start work on an existing ticket |
| `close-ticket.md` | You have finished work and want to ship + close a ticket |

---

## Board columns

| Column | Meaning |
|---|---|
| Session Prompts | Pinned prompt cards (create/open/close) - never move these |
| Backlog | Idea captured, not yet scheduled |
| This Week | Committed for the current week |
| In Progress | Active work in this session |
| In Review | PR open, awaiting review / visual check |
| Done | Shipped and closed |
