# Bug Patterns

Common issues to look for in BF2 SM3.0 shaders.

## Common Issues

- **Mismatched Semantics**: Ensure `VS2PS_` structs match between Vertex and Pixel Shaders.
- **Precision Loss**: Watch for `float` values being cast to `half` when high precision is needed (e.g., world positions, UVs).
- **Incorrect Coordinate Spaces**: Confusing object space with world space or tangent space.
- **Normalization**: Ensure vectors like normals and light directions are normalized before using them in dot products.
- **Uninitialized Variables**: All variables, especially members of output structs, must be explicitly initialized.
- **Texture Sampling**: Ensure correct sampler types and states (e.g., `_MAGFILTER`, `_MINFILTER`) for the texture usage.
- **Z-Fighting**: Check for depth buffer issues; consider if `Logarithmic Depth Buffer` should be applied.
- **Engine Limitations**: Remember BF2's specific constraints (e.g., limited constant registers, specific register mapping).
- **Macro Overuse**: Be careful with preprocessor macros that might redefine common terms and cause compilation errors.
- **Syntax Errors**: Common HLSL syntax mistakes like missing semicolons or incorrect array indexing.
- **Convention Breaches**: Any code that doesn't follow the `_SnakeCase` for uniforms or `SnakeCase` for locals.
