# ReShadeFX Optimization Tips

Guidance for writing high-performance shaders in the CShade project.

## Hardware Blending

Prefer hardware blending (e.g., `SrcBlend = SRCALPHA; DestBlend = INVSRCALPHA;`) over manual math in pixel shaders when performing temporal smoothing or accumulation. This is significantly more efficient than reading back a texture, blending in the shader, and writing it out.

## Texture Lookups

- Use `tex2Dlod` when mipmaps are available and the level of detail is known.
- Group texture fetches together to allow the GPU to optimize memory access.
- Avoid dependent texture reads (where the UV coordinates for one read depend on the result of another) if possible.

## Precision

- Standardize on `float` for internal calculations to maintain consistency across different APIs (D3D, OpenGL, Vulkan), as `half` precision behavior and performance gains are platform-dependent.
- `float` should be used for coordinates and anything requiring high accuracy (like depth calculations).

## Register Usage

- Minimize the number of temporary variables in large shaders to reduce register pressure.
- Pass fewer values between vertex and pixel shaders by packing data into vectors (e.g., `float4`).

## Loop Unrolling

- Use `[unroll]` for loops with a constant number of iterations to help the compiler optimize.
- Avoid dynamic branching (e.g., `if` statements that depend on variable values) inside tight loops.

## Shared Code

Leverage existing algorithms in `shared/` to avoid reinventing the wheel and to ensure consistency in performance and results.
