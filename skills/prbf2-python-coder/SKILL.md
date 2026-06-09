---
name: prbf2-python-coder
description: Find bugs, generate code, and suggest optimized revisions for Project Reality: BF2 Python 2.7.18 scripts.
---

# Python Coder Assistant for Project Reality: BF2

This skill provides specialized assistance for developing, debugging, and optimizing Python 2.7.18 game logic for the Project Reality: BF2 mod.

## Workflow: Find Bugs

1.  **Analyze Version**: Check for Python 3 syntax (e.g., `print()` as a function, `range()` vs `xrange()`). Reference [python27_tips.md](references/python27_tips.md).
2.  **Verify PR Patterns**: Ensure the module uses the custom event system (`realityevents.py`) and adheres to modularity standards. Reference [pr_bf2_standards.md](references/pr_bf2_standards.md).
3.  **Check Engine Calls**: Look for potentially unsafe or inefficient `host` engine calls (e.g., accessing invalid player objects).
4.  **Identify Logic Errors**: Trace event flow from `realityevents.py` to the module's handlers.

## Workflow: Generate Code

1.  **Template First**: Use `assets/templates/reality_module_template.py` as a starting point for new modules.
2.  **Define Initialization**: Always include an `init()` function and call `realityevents.events.newRegisterHandler()` for relevant events.
3.  **Use Constants**: Reference `game.realityconstants` for game-specific values (e.g., kits, factions).
4.  **Apply Conventions**: Prefix filenames with `reality` and follow the `camelCase` or `snake_case` established in the file you are editing.

## Workflow: Optimize Revisions

1.  **Reduce Engine Calls**: Minimize calls to `host.get_info()` and `host.rcon()`. Use local variables for frequently accessed engine data.
2.  **Python 2.7 Optimization**: Use `xrange()`, `iteritems()`, and avoid large temporary object creation in event handlers.
3.  **Event Subscription**: Instead of broad event listeners, subscribe only to the necessary events in `realityevents.py`.
4.  **Modular Consolidation**: Suggest moving shared logic into `realitycore.py` if it applies to multiple modules.

## Key Reference Files

- [Python 2.7 Tips](references/python27_tips.md): Core language differences and common 2.7 pitfalls.
- [PR BF2 Standards](references/pr_bf2_standards.md): Architectural patterns and Project Reality specific coding conventions.
- [Module Template](assets/templates/reality_module_template.py): Boilerplate for new PR Python modules.
