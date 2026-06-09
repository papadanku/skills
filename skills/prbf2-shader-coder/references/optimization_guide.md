# Optimization Guide

Focus on Shader Model 3.0 performance for BF2 engine.

## Specific Optimization Techniques

- **Half-Lambert Lighting**: Use Valve's formula: `dot(N, L) * 0.5 + 0.5`.
- **Logarithmic Depth Buffer**: Use this to eliminate flickering in distant objects.
- **Bicubic Lightmapping**: Interpolate lightmaps to reduce blockiness.
- **Procedural Sampling**: Sample textures based on distance to avoid repetition.
- **Distance-Based Fog**: Use distance from camera to eliminate "corner-peeking".
- **Instruction Usage**:
    - Minimize dependent texture reads.
    - Avoid unnecessary dynamic branching unless it skips large blocks of code.
    - Use `lerp` instead of manual linear interpolation.
    - Pack scalars into `float4` for vectorized operations.
- **Shared Functions**: Always check if a function already exists in `.fxh` files like `RealityGraphics.fxh`, `RealityPixel.fxh`, etc.
- **Precision**: Use `half` for data that doesn't need high precision (e.g., color, normalized vectors).
