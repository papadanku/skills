# Project Reality: BF2 Coding Standards

Adhere to these patterns and conventions when developing for the PR mod.

## Modular Architecture

- **Prefix**: Prefix all module filenames with `reality` (e.g., `realitynewfeature.py`).
- **Initialization**: Every module must have an `init()` function called by `realityinit.py`.
- **Event-Driven**: Modules should subscribe to events in `realityevents.py` rather than polling the engine directly.

## Key Modules

- `realityinit.py`: The entry point for the whole system. Orchestrates initialization.
- `realityevents.py`: The central event dispatcher. Register event handlers using `realityevents.events.newRegisterHandler`.
- `realitycore.py`: Manages global game state, squads, players, and control points.
- `realitygamemode.py`: Base class for game modes. Specific modes in `gamemodes/` should inherit from `PRGameMode`.

## Event Handling Patterns

```python
# Standard event subscription pattern
import realityevents

def onPlayerSpawn(player):
    # logic here
    pass

def init():
    # Register the handler with the custom event system
    realityevents.events.newRegisterHandler('PlayerSpawn', onPlayerSpawn)
```

## Logging and Debugging

- Use `realitydebug.logInfo("Message")` or `realitydebug.logError("Message")` for game-specific logs.
- Standard `print` statements go to the BF2 server console.

## Performance Considerations

- **Game Engine Calls**: Minimize calls to the BF2 host (e.g., `host.rcon`, `host.get_info`) as these are expensive and can cause lag.
- **Global State**: Prefer storing temporary state in your module's globals if it doesn't need to persist across map resets.
- **Garbage Collection**: Python 2.7 has a deterministic GC but avoid creating massive temporary objects in high-frequency event handlers.
