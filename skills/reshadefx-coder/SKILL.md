---
name: reshadefx-coder
description: Expert ReShadeFX (HLSL) assistant for finding bugs, generating shader code, and suggesting optimized revisions within the CShade project.
---

# ReShadeFX Coder

This skill provides expert assistance for developing and maintaining ReShadeFX shaders in the CShade project. It is designed to find bugs, generate new shader code, and suggest optimized revisions while strictly adhering to the project's established conventions.

## Core Capabilities

### Finding Bugs

Identify common ReShadeFX and HLSL errors, including:
- **Syntax Errors**: Missing semicolons, mismatched brackets, or incorrect semantic names.
- **Resource Mismatches**: Incorrect texture/sampler formats or binding errors.
- **Logical Flaws**: Improper use of coordinate systems (e.g., [0, 1] vs [-1, 1]) or incorrect math for color conversions.
- **API Misuse**: Using features not supported by the ReShade framework or targeting the wrong shader model.

### Code Generation

Generate new `.fx` and `.fxh` files based on user requirements. This includes:
- **Boilerplate**: Standard vertex shaders, texture declarations, and pass definitions.
- **New Effects**: Implementing image processing algorithms (e.g., blurs, filters) using CShade's shared headers.
- **Modular Components**: Creating reusable headers for complex logic.

### Optimization

Suggest and implement performance-oriented revisions:
- **Hardware Blending**: Converting manual math into hardware-accelerated blending operations.
- **Precision Management**: Using `half` where appropriate and optimizing register usage.
- **Algorithm Refinement**: Replacing expensive operations with more efficient alternatives from the `shared/` directory.

## Workflows

### 1. Bug Investigation
When asked to find bugs in a shader:
1. Analyze the `.fx` and any included `.fxh` files.
2. Check for adherence to [conventions.md](references/conventions.md).
3. Look for common pitfalls (e.g., uninitialized variables, out-of-bounds texture access).
4. Propose targeted fixes with explanations.

### 2. Feature Implementation
When asked to add a feature or create a new shader:
1. Research existing implementations in the project for similar logic.
2. Draft a plan using CShade's macro-based DSL (e.g., `cMacros.fxh`).
3. Ensure all new uniforms and functions follow [conventions.md](references/conventions.md).
4. Implement and verify against the project's architectural standards.

### 3. Performance Review
When asked to optimize code:
1. Identify bottlenecks (e.g., redundant texture lookups, complex branching).
2. Apply principles from [optimization_tips.md](references/optimization_tips.md).
3. Provide a side-by-side comparison of the original and optimized versions.

## Resources

- [conventions.md](references/conventions.md): Detailed naming and UI formatting rules.
- [optimization_tips.md](references/optimization_tips.md): Best practices for high-performance ReShadeFX.
