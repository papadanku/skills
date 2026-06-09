# Coding Conventions

Follow these strictly when writing or modifying HLSL code for RealityShaders.

## Case Styles

- **ALLCAPS**
    - State parameters (e.g., `ZENABLE`)
    - System semantics (e.g., `POSITION`, `TEXCOORD0`)
- **ALL_CAPS**
    - Preprocessor macros
    - Preprocessor macro arguments
- **_SnakeCase**
    - Uniform variables (e.g., `_WorldViewProj`)
- **SnakeCase**
    - Function arguments
    - Global variables
    - Local variables
    - Textures and samples (e.g., `BaseTexture`, `BaseSampler`)
- **Snake_Case**
    - Data subcategory

## Prefixes and Structs

- **PREFIX_Data**
    - `struct` datatype:
        - `APP2VS_`: Application to Vertex Shader
        - `VS2PS_`: Vertex Shader to Pixel Shader
        - `PS2FB_`: Pixel Shader to Frame Buffer
        - `PS2MRT_`: Pixel Shader to Multiple Render Targets
- **VS_**
    - VertexShader methods
- **PS_**
    - PixelShader methods

## General Guidance

- **Shader Model 3.0**: Use SM3.0 features where appropriate (e.g., more registers, dynamic branching, texture sampling in VS).
- **Linear Lighting**: Work in linear space.
- **Precision**: Use `float` for coordinates and `half` for colors/normalized values when performance is critical, though SM3.0 often handles full precision well.
