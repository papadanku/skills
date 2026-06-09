# Python 2.7.18 Best Practices and Pitfalls

This project uses Python 2.7.18. Ensure all generated and reviewed code adheres to these constraints.

## Core Language Differences

- **Print Statement**: Use `print "message"` (statement), not `print("message")` (function, though it works in 2.7 with parentheses, it's a statement).
- **Division**: Integer division `5 / 2` results in `2`. Use `5 / 2.0` or `from __future__ import division` for float division.
- **Strings**: Default strings are ASCII byte strings. Use `u"string"` for Unicode literals.
- **Classes**: Always inherit from `object` to create "new-style" classes (e.g., `class MyClass(object):`).
- **Iterators**: Use `xrange()` instead of `range()` for memory efficiency in loops. Use `itertools` where possible.
- **Dictionary Iteration**: Use `d.iteritems()`, `d.itervalues()`, and `d.iterkeys()` instead of their list-returning counterparts.
- **Input**: Use `raw_input()` for string input, NOT `input()` (which evaluates the string as Python code).
- **Exceptions**: Use `except Exception, e:` instead of `except Exception as e:` (though `as` works in 2.7.x, the former is very common in older scripts).

## Common BF2-Specific Constraints

- **Imports**: Avoid complex relative imports. The BF2 engine's Python path can be brittle.
- **Performance**: Python 2.7 is slower than 3.x. Minimize dictionary lookups in high-frequency loops (like game state updates).
- **No `with` statement for some older objects**: Some BF2-provided objects may not support context managers.

## Standard Library Limitations

- No `pathlib`. Use `os.path`.
- No `f-strings`. Use `"{} {}".format(a, b)` or `"%s %s" % (a, b)`.
- No `asyncio`. Use `realitytimer.py` for delayed execution.
