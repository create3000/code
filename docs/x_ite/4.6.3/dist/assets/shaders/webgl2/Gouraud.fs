#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
precision highp int;
#else
precision mediump float;
precision mediump int;
#endif
uniform int x3d_GeometryType;
uniform bool x3d_Lighting; 
uniform bool x3d_ColorMaterial; 
in float fogDepth; 
in vec4 frontColor; 
in vec4 backColor; 
in vec4 texCoord0; 
in vec4 texCoord1; 
in vec3 normal; 
in vec3 vertex; 
in vec3 localNormal; 
in vec3 localVertex; 
#ifdef X3D_LOGARITHMIC_DEPTH_BUFFER
uniform float x3d_LogarithmicFarFactor1_2;
in float depth;
#endif
out vec4 x3d_FragColor;
#define M_PI 3.14159265358979323846
float rand (vec2 co) { return fract (sin (dot (co.xy, vec2 (12.9898,78.233))) * 43758.5453); }
float rand (vec2 co, float l) { return rand (vec2 (rand (co), l)); }
float rand (vec2 co, float l, float t) { return rand (vec2 (rand (co, l), t)); }
float
perlin (vec2 p, float dim, float time)
{
vec2 pos = floor (p * dim);
vec2 posx = pos + vec2 (1.0, 0.0);
vec2 posy = pos + vec2 (0.0, 1.0);
vec2 posxy = pos + vec2 (1.0);
float c = rand (pos, dim, time);
float cx = rand (posx, dim, time);
float cy = rand (posy, dim, time);
float cxy = rand (posxy, dim, time);
vec2 d = fract (p * dim);
d = -0.5 * cos (d * M_PI) + 0.5;
float ccx = mix (c, cx, d.x);
float cycxy = mix (cy, cxy, d.x);
float center = mix (ccx, cycxy, d.y);
return center * 2.0 - 1.0;
}
vec3
perlin (vec3 p)
{
return vec3 (perlin (p.xy, 1.0, 0.0),
perlin (p.yz, 1.0, 0.0),
perlin (p.zx, 1.0, 0.0));
}
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp sampler3D;
#else
precision mediump sampler3D;
#endif
uniform int x3d_NumTextures;
uniform int x3d_TextureType [x3d_MaxTextures]; 
uniform sampler2D x3d_Texture2D [x3d_MaxTextures];
uniform sampler3D x3d_Texture3D [x3d_MaxTextures];
uniform samplerCube x3d_CubeMapTexture [x3d_MaxTextures];
uniform vec4 x3d_MultiTextureColor;
uniform x3d_MultiTextureParameters x3d_MultiTexture [x3d_MaxTextures];
uniform x3d_TextureCoordinateGeneratorParameters x3d_TextureCoordinateGenerator [x3d_MaxTextures];
#ifdef X3D_MULTI_TEXTURING
vec4
getTexCoord (const in int i)
{
switch (i)
{
case 0:
{
return texCoord0;
}
default:
{
return texCoord1;
}
}
}
vec4
getTextureCoordinate (const in x3d_TextureCoordinateGeneratorParameters textureCoordinateGenerator, const in int i)
{
int mode = textureCoordinateGenerator .mode;
switch (mode)
{
case x3d_None:
{
return getTexCoord (i);
}
case x3d_Sphere:
{
return vec4 (normal .x / 2.0 + 0.5, normal .y / 2.0 + 0.5, 0.0, 1.0);
}
case x3d_CameraSpaceNormal:
{
return vec4 (normal, 1.0);
}
case x3d_CameraSpacePosition:
{
return vec4 (vertex, 1.0);
}
case x3d_CameraSpaceReflectionVector:
{
return vec4 (reflect (normalize (vertex), -normal), 1.0);
}
case x3d_SphereLocal:
{
return vec4 (localNormal .x / 2.0 + 0.5, localNormal .y / 2.0 + 0.5, 0.0, 1.0);
}
case x3d_Coord:
{
return vec4 (localVertex, 1.0);
}
case x3d_CoordEye:
{
return vec4 (vertex, 1.0);
}
case x3d_Noise:
{
vec3 scale = vec3 (textureCoordinateGenerator .parameter [0], textureCoordinateGenerator .parameter [1], textureCoordinateGenerator .parameter [2]);
vec3 translation = vec3 (textureCoordinateGenerator .parameter [3], textureCoordinateGenerator .parameter [4], textureCoordinateGenerator .parameter [5]);
return vec4 (perlin (localVertex * scale + translation), 1.0);
}
case x3d_NoiseEye:
{
vec3 scale = vec3 (textureCoordinateGenerator .parameter [0], textureCoordinateGenerator .parameter [1], textureCoordinateGenerator .parameter [2]);
vec3 translation = vec3 (textureCoordinateGenerator .parameter [3], textureCoordinateGenerator .parameter [4], textureCoordinateGenerator .parameter [5]);
return vec4 (perlin (vertex * scale + translation), 1.0);
}
case x3d_SphereReflect:
{
float eta = textureCoordinateGenerator .parameter [0];
return vec4 (refract (normalize (vertex), -normal, eta), 1.0);
}
case x3d_SphereReflectLocal:
{
float eta = textureCoordinateGenerator .parameter [0];
vec3 eye = vec3 (textureCoordinateGenerator .parameter [1], textureCoordinateGenerator .parameter [2], textureCoordinateGenerator .parameter [3]);
return vec4 (refract (normalize (localVertex - eye), -localNormal, eta), 1.0);
}
default:
{
return getTexCoord (i);
}
}
}
vec4
getTexture2D (const in int i, const in vec2 texCoord)
{
switch (i)
{
case 0:
{
return texture (x3d_Texture2D [0], texCoord);
}
default:
{
return texture (x3d_Texture2D [1], texCoord);
}
}
}
vec4
getTexture3D (const in int i, const in vec3 texCoord)
{
switch (i)
{
case 0:
{
return texture (x3d_Texture3D [0], texCoord);
}
default:
{
return texture (x3d_Texture3D [1], texCoord);
}
}
}
vec4
getTextureCube (const in int i, const in vec3 texCoord)
{
switch (i)
{
case 0:
{
return texture (x3d_CubeMapTexture [0], texCoord);
}
default:
{
return texture (x3d_CubeMapTexture [1], texCoord);
}
}
}
vec4
getTextureColor (const in vec4 diffuseColor, const in vec4 specularColor)
{
vec4 currentColor = diffuseColor;
for (int i = 0; i < x3d_MaxTextures; ++ i)
{
if (i == x3d_NumTextures)
break;
vec4 texCoord = getTextureCoordinate (x3d_TextureCoordinateGenerator [i], i);
vec4 textureColor = vec4 (1.0);
texCoord .stp /= texCoord .q;
if (x3d_GeometryType == x3d_Geometry2D && ! gl_FrontFacing)
texCoord .s = 1.0 - texCoord .s;
switch (x3d_TextureType [i])
{
case x3d_TextureType2D:
{
textureColor = getTexture2D (i, texCoord .st);
break;
}
case x3d_TextureType3D:
{
textureColor = getTexture3D (i, texCoord .stp);
break;
}
case x3d_TextureTypeCubeMapTexture:
{
textureColor = getTextureCube (i, texCoord .stp);
break;
}
}
x3d_MultiTextureParameters multiTexture = x3d_MultiTexture [i];
vec4 arg1 = textureColor;
vec4 arg2 = currentColor;
int source = multiTexture .source;
switch (source)
{
case x3d_Diffuse:
{
arg1 = diffuseColor;
break;
}
case x3d_Specular:
{
arg1 = specularColor;
break;
}
case x3d_Factor:
{
arg1 = x3d_MultiTextureColor;
break;
}
}
int function = multiTexture .function;
switch (function)
{
case x3d_Complement:
{
arg1 = 1.0 - arg1;
break;
}
case x3d_AlphaReplicate:
{
arg1 .a = arg2 .a;
break;
}
}
int mode = multiTexture .mode;
int alphaMode = multiTexture .alphaMode;
switch (mode)
{
case x3d_Replace:
{
currentColor .rgb = arg1 .rgb;
break;
}
case x3d_Modulate:
{
currentColor .rgb = arg1 .rgb * arg2 .rgb;
break;
}
case x3d_Modulate2X:
{
currentColor .rgb = (arg1 .rgb * arg2 .rgb) * 2.0;
break;
}
case x3d_Modulate4X:
{
currentColor .rgb = (arg1 .rgb * arg2 .rgb) * 4.0;
break;
}
case x3d_Add:
{
currentColor .rgb = arg1 .rgb + arg2 .rgb;
break;
}
case x3d_AddSigned:
{
currentColor .rgb = arg1 .rgb + arg2 .rgb - 0.5;
break;
}
case x3d_AddSigned2X:
{
currentColor .rgb = (arg1 .rgb + arg2 .rgb - 0.5) * 2.0;
break;
}
case x3d_AddSmooth:
{
currentColor .rgb = arg1 .rgb + (1.0 - arg1 .rgb) * arg2 .rgb;
break;
}
case x3d_Subtract:
{
currentColor .rgb = arg1 .rgb - arg2 .rgb;
break;
}
case x3d_BlendDiffuseAlpha:
{
currentColor .rgb = arg1 .rgb * diffuseColor .a + arg2 .rgb * (1.0 - diffuseColor .a);
break;
}
case x3d_BlendTextureAlpha:
{
currentColor .rgb = arg1 .rgb * arg1 .a + arg2 .rgb * (1.0 - arg1 .a);
break;
}
case x3d_BlendFactorAlpha:
{
currentColor .rgb = arg1 .rgb * x3d_MultiTextureColor .a + arg2 .rgb * (1.0 - x3d_MultiTextureColor .a);
break;
}
case x3d_BlendCurrentAlpha:
{
currentColor .rgb = arg1 .rgb * arg2 .a + arg2 .rgb * (1.0 - arg2 .a);
break;
}
case x3d_ModulateAlphaAddColor:
{
currentColor .rgb = arg1 .rgb + arg1 .a * arg2 .rgb;
break;
}
case x3d_ModulateInvAlphaAddColor:
{
currentColor .rgb = (1.0 - arg1 .a) * arg2 .rgb + arg1 .rgb;
break;
}
case x3d_ModulateInvColorAddAlpha:
{
currentColor .rgb = (1.0 - arg1 .rgb) * arg2 .rgb + arg1 .a;
break;
}
case x3d_DotProduct3:
{
currentColor .rgb = vec3 (dot (arg1 .rgb * 2.0 - 1.0, arg2 .rgb * 2.0 - 1.0));
break;
}
case x3d_SelectArg1:
{
currentColor .rgb = arg1 .rgb;
break;
}
case x3d_SelectArg2:
{
currentColor .rgb = arg2 .rgb;
break;
}
case x3d_Off:
{
break;
}
}
switch (alphaMode)
{
case x3d_Replace:
{
currentColor .a = arg1 .a;
break;
}
case x3d_Modulate:
{
currentColor .a = arg1 .a * arg2 .a;
break;
}
case x3d_Modulate2X:
{
currentColor .a = (arg1 .a * arg2 .a) * 2.0;
break;
}
case x3d_Modulate4X:
{
currentColor .a = (arg1 .a * arg2 .a) * 4.0;
break;
}
case x3d_Add:
{
currentColor .a = arg1 .a + arg2 .a;
break;
}
case x3d_AddSigned:
{
currentColor .a = arg1 .a + arg2 .a - 0.5;
break;
}
case x3d_AddSigned2X:
{
currentColor .a = (arg1 .a + arg2 .a - 0.5) * 2.0;
break;
}
case x3d_AddSmooth:
{
currentColor .a = arg1 .a + (1.0 - arg1 .a) * arg2 .a;
break;
}
case x3d_Subtract:
{
currentColor .a = arg1 .a - arg2 .a;
break;
}
case x3d_BlendDiffuseAlpha:
{
currentColor .a = arg1 .a * diffuseColor .a + arg2 .a * (1.0 - diffuseColor .a);
break;
}
case x3d_BlendTextureAlpha:
{
currentColor .a = arg1 .a * arg1 .a + arg2 .a * (1.0 - arg1 .a);
break;
}
case x3d_BlendFactorAlpha:
{
currentColor .a = arg1 .a * x3d_MultiTextureColor .a + arg2 .a * (1.0 - x3d_MultiTextureColor .a);
break;
}
case x3d_BlendCurrentAlpha:
{
currentColor .a = arg1 .a * arg2 .a + arg2 .a * (1.0 - arg2 .a);
break;
}
case x3d_ModulateAlphaAddColor:
{
currentColor .a = arg1 .a + arg1 .a * arg2 .a;
break;
}
case x3d_ModulateInvAlphaAddColor:
{
currentColor .a = (1.0 - arg1 .a) * arg2 .a + arg1 .a;
break;
}
case x3d_ModulateInvColorAddAlpha:
{
currentColor .a = (1.0 - arg1 .a) * arg2 .a + arg1 .a;
break;
}
case x3d_DotProduct3:
{
currentColor .a = dot (arg1 .rgb * 2.0 - 1.0, arg2 .rgb * 2.0 - 1.0);
break;
}
case x3d_SelectArg1:
{
currentColor .a = arg1 .a;
break;
}
case x3d_SelectArg2:
{
currentColor .a = arg2 .a;
break;
}
case x3d_Off:
{
break;
}
}
}
return currentColor;
}
#else
vec4
getTextureColor (const in vec4 diffuseColor, const in vec4 specularColor)
{
vec4 texCoord = texCoord0;
vec4 textureColor = vec4 (1.0);
texCoord .stp /= texCoord .q;
if (x3d_GeometryType == x3d_Geometry2D && ! gl_FrontFacing)
texCoord .s = 1.0 - texCoord .s;
switch (x3d_TextureType [0])
{
case x3d_TextureType2D:
{
textureColor = texture (x3d_Texture2D [0], texCoord .st);
break;
}
case x3d_TextureType3D:
{
textureColor = texture (x3d_Texture3D [0], texCoord .stp);
break;
}
case x3d_TextureTypeCubeMapTexture:
{
textureColor = texture (x3d_CubeMapTexture [0], texCoord .stp);
break;
}
}
return diffuseColor * textureColor;
}
#endif
uniform x3d_FillPropertiesParameters x3d_FillProperties;
vec4
getHatchColor (vec4 color)
{
vec4 finalColor = x3d_FillProperties .filled ? color : vec4 (0.0);
if (x3d_FillProperties .hatched)
{
vec4 hatch = texture (x3d_FillProperties .hatchStyle, gl_FragCoord .xy / 32.0);
hatch .rgb *= x3d_FillProperties .hatchColor;
finalColor = mix (finalColor, hatch, hatch .a);
}
return finalColor;
}
uniform x3d_FogParameters x3d_Fog;
float
getFogInterpolant ()
{
if (x3d_Fog .type == x3d_None)
return 1.0;
if (x3d_Fog .fogCoord)
return clamp (1.0 - fogDepth, 0.0, 1.0);
float visibilityRange = x3d_Fog .visibilityRange;
if (visibilityRange <= 0.0)
return 1.0;
float dV = length (x3d_Fog .matrix * vertex);
if (dV >= visibilityRange)
return 0.0;
switch (x3d_Fog .type)
{
case x3d_LinearFog:
{
return (visibilityRange - dV) / visibilityRange;
}
case x3d_ExponentialFog:
{
return exp (-dV / (visibilityRange - dV));
}
default:
{
return 1.0;
}
}
}
vec3
getFogColor (const in vec3 color)
{
return mix (x3d_Fog .color, color, getFogInterpolant ());
}
uniform int x3d_NumClipPlanes;
uniform vec4 x3d_ClipPlane [x3d_MaxClipPlanes];
void
clip ()
{
for (int i = 0; i < x3d_MaxClipPlanes; ++ i)
{
if (i == x3d_NumClipPlanes)
break;
if (dot (vertex, x3d_ClipPlane [i] .xyz) - x3d_ClipPlane [i] .w < 0.0)
discard;
}
}
void
main ()
{
clip ();
vec4 finalColor = gl_FrontFacing ? frontColor : backColor;
if (x3d_NumTextures > 0)
{
if (x3d_Lighting)
{
finalColor = getTextureColor (finalColor, vec4 (1.0));
}
else
{
if (x3d_ColorMaterial)
{
finalColor = getTextureColor (finalColor, vec4 (1.0));
}
else
{
finalColor = getTextureColor (vec4 (1.0), vec4 (1.0));
}
}
}
finalColor = getHatchColor (finalColor);
finalColor .rgb = getFogColor (finalColor .rgb);
x3d_FragColor = finalColor;
#ifdef X3D_LOGARITHMIC_DEPTH_BUFFER
if (x3d_LogarithmicFarFactor1_2 > 0.0)
gl_FragDepth = log2 (depth) * x3d_LogarithmicFarFactor1_2;
else
gl_FragDepth = gl_FragCoord .z;
#endif
}
