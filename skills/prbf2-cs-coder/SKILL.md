---
name: prbf2-cs-coder
description: Assistant for CS-Script in Project Reality BF2 build scripts. Use when finding bugs, generating code, or suggesting optimizations for .csx scripts in the Project Reality workspace.
---

# CS-Script Assistant (prbf2-cs-coder)

This skill provides specialized assistance for working with Project Reality BF2's CS-Script (`.csx`) environment. It is designed to find bugs, generate idiomatic code, and suggest optimizations for build scripts.

## Core Capabilities

- **Bug Hunting**: Identifies common pitfalls like missing `#load` directives, incorrect parallelism configuration, or thread-unsafe operations in `Parallel.ForEach`.
- **Code Generation**: Generates boilerplate for new scripts, including the mandatory `#category`, `#name`, and `#desc` directives, and correctly integrating with the `ScriptUI` and `ScriptProgress`.
- **Optimized Revisions**: Suggests performance improvements such as leveraging `AsParallel()`, `WithDegreeOfParallelism(Build.GetParallelism())`, and efficient file enumeration using the `Common/Files.csx` utility.

## Key Patterns and Utilities

- **Common Namespaces**: `Reality.BF2`, `Reality.BF2.Build`, `Reality.BF2.Console`, `Reality.Utils`.
- **Directories**: Always use `Directories.CurrentModDirectory` or `Directories.CurrentModLevelsDirectory`.
- **Parallelism**: Use `Build.GetParallelism()` for all parallel operations.
- **Reporting**: Scripts should return a `ScriptResult` object.

For detailed code patterns, see [patterns.md](references/patterns.md).

## Usage Guidelines

- When **finding bugs**, check for:
    - Thread safety issues when using `ScriptProgress` or writing to files inside parallel loops.
    - Missing `#load` directives for common utility files (e.g., `Files.csx`, `Map.csx`, `Sound.csx`).
    - Using hardcoded paths instead of the `Directories` class.
- When **generating code**, ensure:
    - The top-level directives are correctly formatted.
    - The script includes a `Main` method or a clear entry point that returns a `ScriptResult`.
    - UI progress updates are provided for long-running operations.
- When **optimizing code**, recommend:
    - Moving sequential I/O operations into parallel blocks where possible.
    - Using the specialized parsers in `Common/` (e.g., `ConFileParser.csx`, `GpoParser.csx`).
    - Minimizing the scope of locks in parallel loops.
