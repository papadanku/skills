# ReShadeFX (HLSL) Coding Conventions

These conventions are used across the CShade project for consistency and readability.

## UI Parameters

For `ui_category` and `ui_label` annotations in uniform variables, use a forward slash `/` to delineate subcategories.

**Example:**

```hlsl
uniform float _Level1Weight <
    ui_category = "Bloom / Level Weights";
    ui_label = "Level 1";
    ui_type = "slider";
    ui_min = 0.0;
    ui_max = 1.0;
> = 1.0;
```

## UI Markers

Shaders use UI markers in their descriptions to signify important notes. These appear at the top of the shader's settings.

- `[D]` **Depth Buffer**: Needs depth access.
- `[&]` **Linked**: Needs another shader enabled first.
- `[+]` **Preprocessor**: Extra features via Preprocessor definitions.
- `[!]` **Caution**: Major limitations or breaking changes.
- `[?]` **Info**: General notes or tips.
- `[$]` **Expensive**: High performance demand.

## Naming Conventions

### Shared Methods from Header Files (`.fxh`)

Functions imported from shared header files follow the pattern `ModuleName_FunctionName()`.
*Example:* `shared/common/cLib.fxh` would contain functions like `Common_CLib_FunctionName()`.

### ALLCAPS

- **State parameters**: (e.g., `BlendOp = ADD;`)
- **System semantics**: (e.g., `float4 SV_POSITION;`)

### ALL_CAPS

- **Preprocessor definitions**: (e.g., `#define SHADER_VERSION`)
- **Preprocessor macros**: (e.g., `#define EXAMPLE_MACRO()`)
- **Preprocessor macro arguments**: (e.g., `#define EXAMPLE_MACRO(EXAMPLE_ARG)`)

### _SnakeCase

- **Uniform variables**: (e.g., `uniform float3 _Example;`)

### SnakeCase

- **Function arguments**: (e.g., `void Function(float4 ArgumentOne);`)
- **Global variables**: (e.g., `static const float4 GlobalVariable = 1.0;`)
- **Local variables**: (e.g., `float4 LocalVariable = 1.0;`)
- **Textures and Samplers**: (e.g., `texture2D ExampleTex;`, `sampler2D SampleExampleTex;`)

### SNAKE_Case

- **`struct` data types**: (e.g., `struct APP2VS_Example;`, `struct VS2PS_Example;`, `struct PS2FB_Example;`, `struct PS2MRT_Example;`)
- **`VertexShader` and `PixelShader` entry points**: (e.g., `VertexShader = VS_Example;`, `PixelShader = PS_Example;`)
