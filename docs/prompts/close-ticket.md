# close-ticket

Use this prompt after work is merged and you want to formally close a ticket.

---

## Prompt

Paste this into a Claude Code session from `/Users/mattowen_1/projects/british-hotspot-register`, replacing ISSUE_NUMBER:

```
I have finished work on ticket #ISSUE_NUMBER for The UK Hotspot Register and want to close it properly.

Please:

1. VERIFY SHIP STATE
   - Fetch the issue: gh issue view ISSUE_NUMBER --repo mattjowen1991-hue/UK-Hotspot-Register
   - Check the PR is merged: gh pr list --repo mattjowen1991-hue/UK-Hotspot-Register --state merged
   - Confirm the branch is merged into main and there are no uncommitted changes
   - If the PR is not yet merged, stop and say so

2. DRIFT CHECK
   - Read each file changed in this ticket (check the PR diff or git log)
   - Confirm the shipped code matches the acceptance criteria in the ticket
   - Note any acceptance criteria that were partially addressed or deferred
   - No dashes (em/en) anywhere in new content; no invented source URLs

3. PROJECT.md AUDIT
   - Read PROJECT.md
   - Make the edit inline if any of these are true - do not just suggest it:
     - A new file was created that other sessions need to know about
     - A new convention was established (e.g. a new field on the SITES record)
     - The file structure in section 3 changed
     - Existing information in PROJECT.md is now wrong or outdated
   - If nothing changed: leave PROJECT.md alone

4. SCHEMA AUDIT
   - Did this ticket add or change a field on the SITES record?
   - If YES: update data/schema.md to match
   - If NO: skip this step

5. MEMORY AUDIT
   - Did this work reveal anything worth saving to project memory for future sessions?
     Examples: a surprising rendering quirk, a sourcing dead end worth remembering,
     a constraint that isn't captured in PROJECT.md
   - If YES: write it now to /Users/mattowen_1/.claude/projects/-Users-mattowen-1/memory/
     following the memory file format (frontmatter: name, description, metadata.type)
     and add a one-line pointer to MEMORY.md
   - If NO: skip this step

6. FOLLOW-UP TICKETS
   - List any deferred scope, bugs discovered, or related work that should become tickets
   - For each: one-sentence description of the work
   - Ask if I want to create any of them now using the create-ticket prompt

7. CLOSE THE LOOP
   - Close the issue: gh issue close ISSUE_NUMBER --repo mattjowen1991-hue/UK-Hotspot-Register
   - Move to Done on the project board:
     gh project item-edit 2 --owner mattjowen1991-hue --url [ISSUE URL] --field "Status" --value "Done"
   - Delete the feature branch if it was merged:
     git branch -d feat/branch-name
     git push origin --delete feat/branch-name

8. SIGN-OFF SUMMARY
   Output:
   - Issue #N: [title] - CLOSED
   - Files changed: [list]
   - PROJECT.md updated: yes/no + what changed
   - schema.md updated: yes/no + what changed
   - Memory written: yes/no + slug
   - Follow-up tickets created: #N, #N or none
   - One sentence on what was shipped
```

---

## Tips

- Run this at the end of the session, not mid-way through
- PROJECT.md and schema.md edits should be made inline - not just suggested
- Memory entries should be things that would surprise a future Claude session, not things derivable from reading the code
- Follow-up tickets go into Backlog by default
- Delete the feature branch after merging to keep the remote clean
