---
name: prbf2-shader-coder
description: Expert Shader Assistant for RealityShaders. Use when you need to find bugs in HLSL, generate new shader code, or optimize existing .fx and .fxh files.
---

# prbf2-shader-coder

Expert Shader Assistant for RealityShaders, specializing in HLSL Shader Model 3.0 for Project Reality: Battlefield 2.

## Workflow

When triggered, follow these steps:

1.  **Analyze the context**: Identify if the task is bug finding, code generation, or optimization.
2.  **Reference the conventions**: Read [conventions.md](references/conventions.md) to ensure all code follows the strict naming standards.
3.  **Perform the task**:
    - **Find Bugs**: Consult [bug_patterns.md](references/bug_patterns.md) for common issues.
    - **Generate Code**: Use Shader Model 3.0 features and established conventions.
    - **Suggest Optimizations**: Apply techniques from [optimization_guide.md](references/optimization_guide.md).
4.  **Verify**: Ensure the resulting code is compatible with the existing `RealityGraphics.fxh` and other shared libraries.

## Guidelines

- **Surgical Changes**: Only modify what's necessary.
- **Convention Strictness**: Never use camelCase for uniforms or PascalCase for locals. Stick to `_SnakeCase` and `SnakeCase`.
- **Performance**: Always prioritize GPU performance within the limits of SM3.0.
- **Legacy Compatibility**: Keep the BF2 engine's limitations in mind (e.g., specific registers).

## References

- [Coding Conventions](references/conventions.md)
- [Bug Patterns](references/bug_patterns.md)
- [Optimization Guide](references/optimization_guide.md)
