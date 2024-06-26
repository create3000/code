/* X_ITE v10.0.2 */(() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Components\")"
const Components_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Components");
var Components_default = /*#__PURE__*/__webpack_require__.n(Components_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Fields\")"
const Fields_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Fields");
var Fields_default = /*#__PURE__*/__webpack_require__.n(Fields_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Base/X3DFieldDefinition\")"
const X3DFieldDefinition_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Base/X3DFieldDefinition");
var X3DFieldDefinition_default = /*#__PURE__*/__webpack_require__.n(X3DFieldDefinition_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Base/FieldDefinitionArray\")"
const FieldDefinitionArray_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Base/FieldDefinitionArray");
var FieldDefinitionArray_default = /*#__PURE__*/__webpack_require__.n(FieldDefinitionArray_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Components/Shape/X3DAppearanceChildNode\")"
const X3DAppearanceChildNode_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Components/Shape/X3DAppearanceChildNode");
var X3DAppearanceChildNode_default = /*#__PURE__*/__webpack_require__.n(X3DAppearanceChildNode_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Base/X3DConstants\")"
const X3DConstants_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Base/X3DConstants");
var X3DConstants_default = /*#__PURE__*/__webpack_require__.n(X3DConstants_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Namespace\")"
const Namespace_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Namespace");
var Namespace_default = /*#__PURE__*/__webpack_require__.n(Namespace_namespaceObject);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/BlendMode.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/







function BlendMode (executionContext)
{
   X3DAppearanceChildNode_default().call (this, executionContext);

   this .addType ((X3DConstants_default()).BlendMode);

   this .factorTypes   = new Map ();
   this .equationTypes = new Map ();
}

Object .assign (Object .setPrototypeOf (BlendMode .prototype, (X3DAppearanceChildNode_default()).prototype),
{
   initialize ()
   {
      X3DAppearanceChildNode_default().prototype .initialize .call (this);

      const
         gl  = this .getBrowser () .getContext (),
         ext = gl .getExtension ('EXT_blend_minmax');

      this .factorTypes .set ("ZERO",                     gl .ZERO);
      this .factorTypes .set ("ONE",                      gl .ONE);
      this .factorTypes .set ("SRC_COLOR",                gl .SRC_COLOR);
      this .factorTypes .set ("ONE_MINUS_SRC_COLOR",      gl .ONE_MINUS_SRC_COLOR);
      this .factorTypes .set ("DST_COLOR",                gl .DST_COLOR);
      this .factorTypes .set ("ONE_MINUS_DST_COLOR",      gl .ONE_MINUS_DST_COLOR);
      this .factorTypes .set ("SRC_ALPHA",                gl .SRC_ALPHA);
      this .factorTypes .set ("ONE_MINUS_SRC_ALPHA",      gl .ONE_MINUS_SRC_ALPHA);
      this .factorTypes .set ("DST_ALPHA",                gl .DST_ALPHA);
      this .factorTypes .set ("ONE_MINUS_DST_ALPHA",      gl .ONE_MINUS_DST_ALPHA);
      this .factorTypes .set ("SRC_ALPHA_SATURATE",       gl .SRC_ALPHA_SATURATE);
      this .factorTypes .set ("CONSTANT_COLOR",           gl .CONSTANT_COLOR);
      this .factorTypes .set ("ONE_MINUS_CONSTANT_COLOR", gl .ONE_MINUS_CONSTANT_COLOR);
      this .factorTypes .set ("CONSTANT_ALPHA",           gl .CONSTANT_ALPHA);
      this .factorTypes .set ("ONE_MINUS_CONSTANT_ALPHA", gl .ONE_MINUS_CONSTANT_ALPHA);

      this .equationTypes .set ("FUNC_ADD",              gl .FUNC_ADD);
      this .equationTypes .set ("FUNC_SUBTRACT",         gl .FUNC_SUBTRACT);
      this .equationTypes .set ("FUNC_REVERSE_SUBTRACT", gl .FUNC_REVERSE_SUBTRACT);
      this .equationTypes .set ("MIN",                   gl .MIN || (ext && ext .MIN_EXT));
      this .equationTypes .set ("MAX",                   gl .MAX || (ext && ext .MAX_EXT));

      this ._sourceColorFactor      .addInterest ("set_sourceColorFactor__",      this);
      this ._sourceAlphaFactor      .addInterest ("set_sourceAlphaFactor__",      this);
      this ._destinationColorFactor .addInterest ("set_destinationColorFactor__", this);
      this ._destinationAlphaFactor .addInterest ("set_destinationAlphaFactor__", this);
      this ._colorEquation          .addInterest ("set_colorEquation__",          this);
      this ._alphaEquation          .addInterest ("set_alphaEquation__",          this);

      this .set_sourceColorFactor__ ();
      this .set_sourceAlphaFactor__ ();
      this .set_destinationColorFactor__ ();
      this .set_destinationAlphaFactor__ ();
      this .set_colorEquation__ ();
      this .set_alphaEquation__ ();
   },
   set_sourceColorFactor__ ()
   {
      this .sourceColorFactorType = this .factorTypes .get (this ._sourceColorFactor .getValue ())
         ?? this .factorTypes .get ("SRC_ALPHA");
   },
   set_sourceAlphaFactor__ ()
   {
      this .sourceAlphaFactorType = this .factorTypes .get (this ._sourceAlphaFactor .getValue ())
         ?? this .factorTypes .get ("ONE");
   },
   set_destinationColorFactor__ ()
   {
      this .destinationColorFactorType = this .factorTypes .get (this ._destinationColorFactor .getValue ())
         ?? this .factorTypes .get ("ONE_MINUS_SRC_ALPHA");
   },
   set_destinationAlphaFactor__ ()
   {
      this .destinationAlphaFactorType = this .factorTypes .get (this ._destinationAlphaFactor .getValue ())
      ??    this .factorTypes .get ("ONE_MINUS_SRC_ALPHA");
   },
   set_colorEquation__ ()
   {
      this .colorEquationType = this .equationTypes .get (this ._colorEquation .getValue ())
         ?? this .equationTypes .get ("FUNC_ADD");
   },
   set_alphaEquation__ ()
   {
      this .alphaEquationType = this .equationTypes .get (this ._alphaEquation .getValue ())
         ?? this .equationTypes .get ("FUNC_ADD");
   },
   enable (gl)
   {
      const color = this ._blendColor .getValue ();

      gl .blendColor (color .r, color .g, color .b, color .a);
      gl .blendFuncSeparate (this .sourceColorFactorType, this .destinationColorFactorType, this .sourceAlphaFactorType, this .destinationAlphaFactorType);
      gl .blendEquationSeparate (this .colorEquationType, this .alphaEquationType);
   },
   disable (gl)
   {
      gl .blendFuncSeparate (gl .SRC_ALPHA, gl .ONE_MINUS_SRC_ALPHA, gl .ONE, gl .ONE_MINUS_SRC_ALPHA);
      gl .blendEquationSeparate (gl .FUNC_ADD, gl .FUNC_ADD);
   },
});

Object .defineProperties (BlendMode,
{
   typeName:
   {
      value: "BlendMode",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "blendMode",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "3.3", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "blendColor",              new (Fields_default()).SFColorRGBA ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sourceColorFactor",       new (Fields_default()).SFString ("SRC_ALPHA")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sourceAlphaFactor",       new (Fields_default()).SFString ("ONE")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "destinationColorFactor",  new (Fields_default()).SFString ("ONE_MINUS_SRC_ALPHA")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "destinationAlphaFactor",  new (Fields_default()).SFString ("ONE_MINUS_SRC_ALPHA")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "colorEquation",           new (Fields_default()).SFString ("FUNC_ADD")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "alphaEquation",           new (Fields_default()).SFString ("FUNC_ADD")),
      ]),
      enumerable: true,
   },
});

const __default__ = BlendMode;
;

Namespace_default().add ("BlendMode", "x_ite/Components/X_ITE/BlendMode", __default__);
/* harmony default export */ const X_ITE_BlendMode = (__default__);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/DepthMode.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/







function DepthMode (executionContext)
{
   X3DAppearanceChildNode_default().call (this, executionContext);

   this .addType ((X3DConstants_default()).DepthMode);

   this .addAlias ("depthFunc", this ._depthFunction);
}

Object .assign (Object .setPrototypeOf (DepthMode .prototype, (X3DAppearanceChildNode_default()).prototype),
{
   initialize ()
   {
      X3DAppearanceChildNode_default().prototype .initialize .call (this);

      this ._depthFunction .addInterest ("set_depthFunction__", this);

      this .set_depthFunction__ ();
   },
   set_depthFunction__: (function ()
   {
      const depthFunctions = new Map ([
         ["NEVER",         "NEVER"],
         ["LESS",          "LESS"],
         ["EQUAL",         "EQUAL"],
         ["LESS_EQUAL",    "LEQUAL"],
         ["GREATER",       "GREATER"],
         ["NOT_EQUAL",     "NOTEQUAL"],
         ["GREATER_EQUAL", "GEQUAL"],
         ["ALWAYS",        "ALWAYS"],
      ]);

      return function ()
      {
         const gl = this .getBrowser () .getContext ();

         this .depthFunction = gl [depthFunctions .get (this ._depthFunction .getValue ()) ?? "LEQUAL"];
      };
   })(),
   enable (gl)
   {
      this .depthTest      = gl .isEnabled (gl .DEPTH_TEST);
      this .depthWriteMask = gl .getParameter (gl .DEPTH_WRITEMASK);

      gl .enable (gl .POLYGON_OFFSET_FILL);
      gl .polygonOffset (... this ._polygonOffset);

      if (this ._depthTest .getValue ())
         gl .enable (gl .DEPTH_TEST);
      else
         gl .disable (gl .DEPTH_TEST);

      gl .depthFunc (this .depthFunction);
      gl .depthRange (... this ._depthRange .getValue ());
      gl .depthMask (this ._depthMask .getValue ());
   },
   disable (gl)
   {
      gl .disable (gl .POLYGON_OFFSET_FILL);

      if (this .depthTest)
         gl .enable (gl .DEPTH_TEST);
      else
         gl .disable (gl .DEPTH_TEST);

      gl .depthFunc (gl .LEQUAL);
      gl .depthRange (0, 1);
      gl .depthMask (this .depthWriteMask);
   },
});

Object .defineProperties (DepthMode,
{
   typeName:
   {
      value: "DepthMode",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "depthMode",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",      new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "polygonOffset", new (Fields_default()).SFVec2f ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "depthRange",    new (Fields_default()).SFVec2f (0, 1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "depthTest",     new (Fields_default()).SFBool (true)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "depthFunction", new (Fields_default()).SFString ("LESS_EQUAL")),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "depthMask",     new (Fields_default()).SFBool (true)),
      ]),
      enumerable: true,
   },
});

const DepthMode_default_ = DepthMode;
;

Namespace_default().add ("DepthMode", "x_ite/Components/X_ITE/DepthMode", DepthMode_default_);
/* harmony default export */ const X_ITE_DepthMode = (DepthMode_default_);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Components/Shape/X3DShapeNode\")"
const X3DShapeNode_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Components/Shape/X3DShapeNode");
var X3DShapeNode_default = /*#__PURE__*/__webpack_require__.n(X3DShapeNode_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Rendering/TraverseType\")"
const TraverseType_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Rendering/TraverseType");
var TraverseType_default = /*#__PURE__*/__webpack_require__.n(TraverseType_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Rendering/VertexArray\")"
const VertexArray_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Rendering/VertexArray");
var VertexArray_default = /*#__PURE__*/__webpack_require__.n(VertexArray_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"standard/Math/Numbers/Vector3\")"
const Vector3_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("standard/Math/Numbers/Vector3");
var Vector3_default = /*#__PURE__*/__webpack_require__.n(Vector3_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"standard/Math/Numbers/Matrix4\")"
const Matrix4_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("standard/Math/Numbers/Matrix4");
var Matrix4_default = /*#__PURE__*/__webpack_require__.n(Matrix4_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"standard/Math/Geometry/Box3\")"
const Box3_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("standard/Math/Geometry/Box3");
var Box3_default = /*#__PURE__*/__webpack_require__.n(Box3_namespaceObject);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/InstancedShape.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/












function InstancedShape (executionContext)
{
   X3DShapeNode_default().call (this, executionContext);

   this .addType ((X3DConstants_default()).InstancedShape);

   this .addChildObjects ((X3DConstants_default()).outputOnly, "matrices", new (Fields_default()).SFTime ());

   this .min   = new (Vector3_default()) ();
   this .max   = new (Vector3_default()) ();
   this .scale = new (Vector3_default()) (1, 1, 1);

   this .numInstances       = 0;
   this .instancesStride    = Float32Array .BYTES_PER_ELEMENT * (16 + 9); // mat4 + mat3
   this .matrixOffset       = 0;
   this .normalMatrixOffset = Float32Array .BYTES_PER_ELEMENT * 16;
}

Object .assign (Object .setPrototypeOf (InstancedShape .prototype, (X3DShapeNode_default()).prototype),
{
   initialize ()
   {
      X3DShapeNode_default().prototype .initialize .call (this);

      const
         browser = this .getBrowser (),
         gl      = browser .getContext ();

      // Check version.

      if (browser .getContext () .getVersion () < 2)
         return;

      this .instances = Object .assign (gl .createBuffer (),
      {
         vertexArrayObject: new (VertexArray_default()) (gl),
         thickLinesVertexArrayObject: new (VertexArray_default()) (gl),
         lineTrianglesBuffer: gl .createBuffer (),
         numLines: 0,
      });

      this ._translations .addInterest ("set_transform__", this);
      this ._rotations    .addInterest ("set_transform__", this);
      this ._scales       .addInterest ("set_transform__", this);
      this ._matrices     .addInterest ("set_matrices__",  this);

      this .set_transform__ ();
   },
   getShapeKey ()
   {
      return 3;
   },
   getNumInstances ()
   {
      return this .numInstances;
   },
   getInstances ()
   {
      return this .instances;
   },
   set_bbox__: (function ()
   {
      const
         min  = new (Vector3_default()) (),
         max  = new (Vector3_default()) (),
         bbox = new (Box3_default()) ();

      return function ()
      {
         if (this .numInstances)
         {
            if (this ._bboxSize .getValue () .equals (this .getDefaultBBoxSize ()))
            {
               if (this .getGeometry ())
                  bbox .assign (this .getGeometry () .getBBox ());
               else
                  bbox .set ();

               const
                  size1_2 = bbox .size .multiply (this .scale .magnitude () / 2),
                  center  = bbox .center;

               min .assign (this .min) .add (center) .subtract (size1_2);
               max .assign (this .max) .add (center) .add      (size1_2);

               this .bbox .setExtents (min, max);
            }
            else
            {
               this .bbox .set (this ._bboxSize .getValue (), this ._bboxCenter .getValue ());
            }
         }
         else
         {
            this .bbox .set ();
         }

         this .getBBoxSize ()   .assign (this .bbox .size);
         this .getBBoxCenter () .assign (this .bbox .center);
      };
   })(),
   set_transform__ ()
   {
      this ._matrices = this .getBrowser () .getCurrentTime ();
   },
   set_matrices__ ()
   {
      const
         browser         = this .getBrowser (),
         gl              = browser .getContext (),
         translations    = this ._translations,
         rotations       = this ._rotations,
         scales          = this ._scales,
         numTranslations = translations .length,
         numRotations    = rotations .length,
         numScales       = scales .length,
         numInstances    = Math .max (numTranslations, numRotations, numScales),
         stride          = this .instancesStride / Float32Array .BYTES_PER_ELEMENT,
         length          = this .instancesStride * numInstances,
         data            = new Float32Array (length),
         matrix          = new (Matrix4_default()) ();

      this .numInstances = numInstances;

      const
         min   = this .min .set (Number .POSITIVE_INFINITY, Number .POSITIVE_INFINITY, Number .POSITIVE_INFINITY),
         max   = this .max .set (Number .NEGATIVE_INFINITY, Number .NEGATIVE_INFINITY, Number .NEGATIVE_INFINITY),
         scale = this .scale .assign (numScales ? max : (Vector3_default()).One);

      for (let i = 0, o = 0; i < numInstances; ++ i, o += stride)
      {
         matrix .set (numTranslations ? translations [Math .min (i, numTranslations - 1)] .getValue () : null,
                      numRotations    ? rotations    [Math .min (i, numRotations    - 1)] .getValue () : null,
                      numScales       ? scales       [Math .min (i, numScales       - 1)] .getValue () : null);

         if (numScales)
            scale .max (scales [Math .min (i, numScales - 1)] .getValue ());

         data .set (matrix, o);
         data .set (matrix .submatrix .transpose () .inverse (), o + 16);

         min .min (matrix .origin);
         max .max (matrix .origin);
      }

      gl .bindBuffer (gl .ARRAY_BUFFER, this .instances);
      gl .bufferData (gl .ARRAY_BUFFER, data, gl .DYNAMIC_DRAW);

      this .set_bbox__ ();
   },
   set_geometry__ ()
   {
      X3DShapeNode_default().prototype .set_geometry__ .call (this);

      if (this .getGeometry ())
         delete this .traverse;
      else
         this .traverse = Function .prototype;

      this .set_transform__ ();
   },
   intersectsBox (box, clipPlanes, modelViewMatrix)
   { },
   traverse (type, renderObject)
   {
      if (!this .numInstances)
         return;

      // Always look at ParticleSystem if you do modify something here and there.

      switch (type)
      {
         case (TraverseType_default()).POINTER:
         {
            if (this ._pointerEvents .getValue ())
               renderObject .addPointingShape (this);

            break;
         }
         case (TraverseType_default()).PICKING:
         {
            break;
         }
         case (TraverseType_default()).COLLISION:
         {
            renderObject .addCollisionShape (this);
            break;
         }
         case (TraverseType_default()).SHADOW:
         {
            if (this ._castShadow .getValue ())
               renderObject .addShadowShape (this);

            break;
         }
         case (TraverseType_default()).DISPLAY:
         {
            if (renderObject .addDisplayShape (this))
            {
               // Currently used for GeneratedCubeMapTexture.
               this .getAppearance () .traverse (type, renderObject);
            }

            break;
         }
      }

      // Currently used for ScreenText and Tools.
      this .getGeometry () .traverse (type, renderObject);
   },
   displaySimple (gl, renderContext, shaderNode)
   {
      this .getGeometry () .displaySimpleInstanced (gl, shaderNode, this);
   },
   display (gl, renderContext)
   {
      this .getGeometry () .displayInstanced (gl, renderContext, this);
   },
});

Object .defineProperties (InstancedShape,
{
   typeName:
   {
      value: "InstancedShape",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "children",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "2.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "metadata",      new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "translations",  new (Fields_default()).MFVec3f ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "rotations",     new (Fields_default()).MFRotation ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "scales",        new (Fields_default()).MFVec3f ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "pointerEvents", new (Fields_default()).SFBool (true)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "castShadow",    new (Fields_default()).SFBool (true)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "visible",       new (Fields_default()).SFBool (true)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "bboxDisplay",   new (Fields_default()).SFBool ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).initializeOnly, "bboxSize",      new (Fields_default()).SFVec3f (-1, -1, -1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).initializeOnly, "bboxCenter",    new (Fields_default()).SFVec3f ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "appearance",    new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput,    "geometry",      new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const InstancedShape_default_ = InstancedShape;
;

Namespace_default().add ("InstancedShape", "x_ite/Components/X_ITE/InstancedShape", InstancedShape_default_);
/* harmony default export */ const X_ITE_InstancedShape = (InstancedShape_default_);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Components/Shape/X3DOneSidedMaterialNode\")"
const X3DOneSidedMaterialNode_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Components/Shape/X3DOneSidedMaterialNode");
var X3DOneSidedMaterialNode_default = /*#__PURE__*/__webpack_require__.n(X3DOneSidedMaterialNode_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Base/X3DCast\")"
const X3DCast_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Base/X3DCast");
var X3DCast_default = /*#__PURE__*/__webpack_require__.n(X3DCast_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"standard/Math/Algorithm\")"
const Algorithm_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("standard/Math/Algorithm");
var Algorithm_default = /*#__PURE__*/__webpack_require__.n(Algorithm_namespaceObject);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/SpecularGlossinessMaterial.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function SpecularGlossinessMaterial (executionContext)
{
   console .warn ("SpecularGlossinessMaterial is depreciated, please use PhysicalMaterial instead.");

   X3DOneSidedMaterialNode_default().call (this, executionContext);

   this .addType ((X3DConstants_default()).SpecularGlossinessMaterial);

   this .materialKey        = "4/";
   this .diffuseColorArray  = new Float32Array (3);
   this .specularColorArray = new Float32Array (3);
   this .extensionNodes     = [ ];
}

Object .assign (Object .setPrototypeOf (SpecularGlossinessMaterial .prototype, (X3DOneSidedMaterialNode_default()).prototype),
{
   initialize ()
   {
      X3DOneSidedMaterialNode_default().prototype .initialize .call (this);

      this ._diffuseColor              .addInterest ("set_diffuseColor__",              this);
      this ._diffuseTexture            .addInterest ("set_diffuseTexture__",            this);
      this ._diffuseTexture            .addInterest ("set_transparent__",               this);
      this ._specularColor             .addInterest ("set_specularColor__",             this);
      this ._glossiness                .addInterest ("set_glossiness__",                this);
      this ._specularGlossinessTexture .addInterest ("set_specularGlossinessTexture__", this);
      this ._occlusionStrength         .addInterest ("set_occlusionStrength__",         this);
      this ._occlusionTexture          .addInterest ("set_occlusionTexture__",          this);
      this ._extensions                .addInterest ("set_extensions__",                this);

      this .set_diffuseColor__ ();
      this .set_diffuseTexture__ ();
      this .set_specularColor__ ();
      this .set_glossiness__ ();
      this .set_specularGlossinessTexture__ ();
      this .set_occlusionStrength__ ();
      this .set_occlusionTexture__ ();
      this .set_extensions__ ();
      this .set_transparent__ ();
   },
   getMaterialKey ()
   {
      return this .materialKey;
   },
   getTextureIndices: (() =>
   {
      let i = 0;

      const textureIndices = {
         DIFFUSE_TEXTURE: i ++,
         SPECULAR_GLOSSINESS_TEXTURE: i ++,
         EMISSIVE_TEXTURE: i ++,
         OCCLUSION_TEXTURE: i ++,
         NORMAL_TEXTURE: i ++,
      };

      return function ()
      {
         return textureIndices;
      };
   })(),
   getBaseTexture ()
   {
      return this .diffuseTextureNode;
   },
   set_diffuseColor__ ()
   {
      //We cannot use this in Windows Edge:
      //this .diffuseColorArray .set (this ._diffuseColor .getValue ());

      const
         diffuseColorArray = this .diffuseColorArray,
         diffuseColor      = this ._diffuseColor .getValue ();

      diffuseColorArray [0] = diffuseColor .r;
      diffuseColorArray [1] = diffuseColor .g;
      diffuseColorArray [2] = diffuseColor .b;
   },
   set_diffuseTexture__ ()
   {
      const index = this .getTextureIndices () .DIFFUSE_TEXTURE;

      if (this .diffuseTextureNode)
      {
         this .diffuseTextureNode ._transparent .removeInterest ("set_transparent__",  this);
         this .diffuseTextureNode ._linear      .removeInterest (`setTexture${index}`, this);
      }

      this .diffuseTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._diffuseTexture);

      if (this .diffuseTextureNode)
      {
         this .diffuseTextureNode ._transparent .addInterest ("set_transparent__",  this);
         this .diffuseTextureNode ._linear      .addInterest (`setTexture${index}`, this, index, this .diffuseTextureNode);
      }

      this .setTexture (index, this .diffuseTextureNode);
   },
   set_specularColor__ ()
   {
      //We cannot use this in Windows Edge:
      //this .specularColorArray .set (this ._specularColor .getValue ());

      const
         specularColorArray = this .specularColorArray,
         specularColor      = this ._specularColor .getValue ();

      specularColorArray [0] = specularColor .r;
      specularColorArray [1] = specularColor .g;
      specularColorArray [2] = specularColor .b;
   },
   set_glossiness__ ()
   {
      this .glossiness = Algorithm_default().clamp (this ._glossiness .getValue (), 0, 1);
   },
   set_specularGlossinessTexture__ ()
   {
      this .specularGlossinessTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._specularGlossinessTexture);

      this .setTexture (this .getTextureIndices () .SPECULAR_GLOSSINESS_TEXTURE, this .specularGlossinessTextureNode);
   },
   set_occlusionStrength__ ()
   {
      this .occlusionStrength = Algorithm_default().clamp (this ._occlusionStrength .getValue (), 0, 1);
   },
   set_occlusionTexture__ ()
   {
      this .occlusionTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._occlusionTexture);

      this .setTexture (this .getTextureIndices () .OCCLUSION_TEXTURE, this .occlusionTextureNode);
   },
   set_transparent__ ()
   {
      this .setTransparent (this .getTransparency () ||
                            this .diffuseTextureNode ?.isTransparent ());
   },
   set_extensions__ ()
   {
      const extensionNodes = this .extensionNodes;

      for (const extensionNode of extensionNodes)
         extensionNode .removeInterest ("set_extensionsKey__", this);

      extensionNodes .length = 0;

      for (const node of this ._extensions)
      {
         const extensionNode = X3DCast_default() ((X3DConstants_default()).X3DMaterialExtensionNode, node);

         if (extensionNode)
            extensionNodes .push (extensionNode);
      }

      extensionNodes .sort ((a, b) => a .getExtensionKey () - b .getExtensionKey ());

      for (const extensionNode of extensionNodes)
         extensionNode .addInterest ("set_extensionsKey__", this);

      this .setTransmission (extensionNodes .some (extensionNode => extensionNode .getType () .includes ((X3DConstants_default()).TransmissionMaterialExtension)));

      this .set_extensionsKey__ ();
   },
   set_extensionsKey__ ()
   {
      const extensionsKey = this .extensionNodes
         .map (extensionNode => `${extensionNode .getExtensionKey () .toString (16)}${extensionNode .getTextureBits () .toString (16)}`)
         .join ("");

      this .materialKey = `[4.${extensionsKey}]`;
   },
   createShader (key, geometryContext, renderContext)
   {
      const
         browser = this .getBrowser (),
         options = this .getShaderOptions (geometryContext, renderContext);

      for (const extensionNode of this .extensionNodes)
         extensionNode .getShaderOptions (options);

      options .push ("X3D_PHYSICAL_MATERIAL", "X3D_MATERIAL_SPECULAR_GLOSSINESS");

      if (+this .getTextureBits ())
      {
         this .diffuseTextureNode            ?.getShaderOptions (options, "DIFFUSE");
         this .specularGlossinessTextureNode ?.getShaderOptions (options, "SPECULAR_GLOSSINESS");
         this .occlusionTextureNode          ?.getShaderOptions (options, "OCCLUSION");
      }

      const shaderNode = browser .createShader ("SpecularGlossiness", "Default", "Physical", options);

      browser .getShaders () .set (key, shaderNode);

      return shaderNode;
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      X3DOneSidedMaterialNode_default().prototype .setShaderUniforms .call (this, gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping);

      for (const extensionNode of this .extensionNodes)
         extensionNode .setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping);

      gl .uniform3fv (shaderObject .x3d_DiffuseColor,  this .diffuseColorArray);
      gl .uniform3fv (shaderObject .x3d_SpecularColor, this .specularColorArray);
      gl .uniform1f  (shaderObject .x3d_Glossiness,    this .glossiness);

      if (!+this .getTextureBits ())
         return;

      this .diffuseTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_DiffuseTexture,
         this ._diffuseTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .specularGlossinessTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_SpecularGlossinessTexture,
         this ._specularGlossinessTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      if (this .occlusionTextureNode)
         gl .uniform1f (shaderObject .x3d_OcclusionStrength, this .occlusionStrength);

      this .occlusionTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_OcclusionTexture,
         this ._occlusionTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (SpecularGlossinessMaterial,
{
   typeName:
   {
      value: "SpecularGlossinessMaterial",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "material",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                         new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "diffuseColor",                     new (Fields_default()).SFColor (1, 1, 1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "diffuseTextureMapping",            new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "diffuseTexture",                   new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularColor",                    new (Fields_default()).SFColor (1, 1, 1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "glossiness",                       new (Fields_default()).SFFloat (1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularGlossinessTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularGlossinessTexture",        new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "emissiveColor",                    new (Fields_default()).SFColor ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "emissiveTextureMapping",           new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "emissiveTexture",                  new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "occlusionStrength",                new (Fields_default()).SFFloat (1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "occlusionTextureMapping",          new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "occlusionTexture",                 new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "normalScale",                      new (Fields_default()).SFFloat (1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "normalTextureMapping",             new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "normalTexture",                    new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "transparency",                     new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "extensions",                       new (Fields_default()).MFNode ()), // experimental
      ]),
      enumerable: true,
   },
});

for (const index of Object .values (SpecularGlossinessMaterial .prototype .getTextureIndices ()))
{
   SpecularGlossinessMaterial .prototype [`setTexture${index}`] = function (index, textureNode)
   {
      this .setTexture (index, textureNode);
   };
}

const SpecularGlossinessMaterial_default_ = SpecularGlossinessMaterial;
;

Namespace_default().add ("SpecularGlossinessMaterial", "x_ite/Components/X_ITE/SpecularGlossinessMaterial", SpecularGlossinessMaterial_default_);
/* harmony default export */ const X_ITE_SpecularGlossinessMaterial = (SpecularGlossinessMaterial_default_);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"x_ite/Components/Core/X3DNode\")"
const X3DNode_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("x_ite/Components/Core/X3DNode");
var X3DNode_default = /*#__PURE__*/__webpack_require__.n(X3DNode_namespaceObject);
;// CONCATENATED MODULE: external "window [Symbol .for (\"X_ITE.X3D\")] .require (\"standard/Utility/BitSet\")"
const BitSet_namespaceObject = window [Symbol .for ("X_ITE.X3D-10.0.2")] .require ("standard/Utility/BitSet");
var BitSet_default = /*#__PURE__*/__webpack_require__.n(BitSet_namespaceObject);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/X3DMaterialExtensionNode.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/





function X3DMaterialExtensionNode (executionContext)
{
   X3DNode_default().call (this, executionContext);

   this .addType ((X3DConstants_default()).X3DMaterialExtensionNode);

   this .textureBits = new (BitSet_default()) ();
}

Object .assign (Object .setPrototypeOf (X3DMaterialExtensionNode .prototype, (X3DNode_default()).prototype),
{
   setTexture (index, textureNode)
   {
      index *= 4;

      this .textureBits .remove (index, 0xf);
      this .textureBits .add (index, textureNode ?.getTextureBits () ?? 0);
   },
   getTextureBits ()
   {
      return this .textureBits;
   },
});

Object .defineProperties (X3DMaterialExtensionNode,
{
   typeName:
   {
      value: "X3DMaterialExtensionNode",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
});

const X3DMaterialExtensionNode_default_ = X3DMaterialExtensionNode;
;

Namespace_default().add ("X3DMaterialExtensionNode", "x_ite/Components/X_ITE/X3DMaterialExtensionNode", X3DMaterialExtensionNode_default_);
/* harmony default export */ const X_ITE_X3DMaterialExtensionNode = (X3DMaterialExtensionNode_default_);
;// CONCATENATED MODULE: ./src/x_ite/Browser/X_ITE/ExtensionKeys.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/

let i = 0;

const ExtensionKeys =
{
   ANISOTROPY_MATERIAL_EXTENSION:        i ++,
   CLEARCOAT_MATERIAL_EXTENSION:         i ++,
   DISPERSION_MATERIAL_EXTENSION:        i ++,
   EMISSIVE_STRENGTH_MATERIAL_EXTENSION: i ++,
   IOR_MATERIAL_EXTENSION:               i ++,
   IRIDESCENCE_MATERIAL_EXTENSION:       i ++,
   SHEEN_MATERIAL_EXTENSION:             i ++,
   SPECULAR_MATERIAL_EXTENSION:          i ++,
   TRANSMISSION_MATERIAL_EXTENSION:      i ++,
   UNLIT_MATERIAL_EXTENSION:             i ++,
   VOLUME_MATERIAL_EXTENSION:            i ++,
};

const ExtensionKeys_default_ = ExtensionKeys;
;

Namespace_default().add ("ExtensionKeys", "x_ite/Browser/X_ITE/ExtensionKeys", ExtensionKeys_default_);
/* harmony default export */ const X_ITE_ExtensionKeys = (ExtensionKeys_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/AnisotropyMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function AnisotropyMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).AnisotropyMaterialExtension);

   this .anisotropyArray = new Float32Array (3);
}

Object .assign (Object .setPrototypeOf (AnisotropyMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._anisotropyStrength .addInterest ("set_anisotropyStrength__", this);
      this ._anisotropyRotation .addInterest ("set_anisotropyRotation__", this);
      this ._anisotropyTexture  .addInterest ("set_anisotropyTexture__",  this);

      this .set_anisotropyStrength__ ();
      this .set_anisotropyRotation__ ();
      this .set_anisotropyTexture__ ();
   },
   set_anisotropyStrength__ ()
   {
      this .anisotropyArray [2] = Math .max (this ._anisotropyStrength .getValue (), 0);
   },
   set_anisotropyRotation__ ()
   {
      const anisotropyRotation = this ._anisotropyRotation .getValue ();

      this .anisotropyArray [0] = Math .cos (anisotropyRotation);
      this .anisotropyArray [1] = Math .sin (anisotropyRotation);
   },
   set_anisotropyTexture__ ()
   {
      this .anisotropyTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._anisotropyTexture);

      this .setTexture (0, this .anisotropyTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .ANISOTROPY_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_ANISOTROPY_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .anisotropyTextureNode ?.getShaderOptions (options, "ANISOTROPY", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform3fv (shaderObject .x3d_AnisotropyEXT, this .anisotropyArray);

      this .anisotropyTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_AnisotropyTextureEXT,
         this ._anisotropyTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (AnisotropyMaterialExtension,
{
   typeName:
   {
      value: "AnisotropyMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                 new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "anisotropyStrength",       new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "anisotropyRotation",       new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "anisotropyTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "anisotropyTexture",        new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const AnisotropyMaterialExtension_default_ = AnisotropyMaterialExtension;
;

Namespace_default().add ("AnisotropyMaterialExtension", "x_ite/Components/X_ITE/AnisotropyMaterialExtension", AnisotropyMaterialExtension_default_);
/* harmony default export */ const X_ITE_AnisotropyMaterialExtension = (AnisotropyMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/ClearcoatMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/










function ClearcoatMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).ClearcoatMaterialExtension);
}

Object .assign (Object .setPrototypeOf (ClearcoatMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._clearcoat                 .addInterest ("set_clearcoat__",                 this);
      this ._clearcoatTexture          .addInterest ("set_clearcoatTexture__",          this);
      this ._clearcoatRoughness        .addInterest ("set_clearcoatRoughness__",        this);
      this ._clearcoatRoughnessTexture .addInterest ("set_clearcoatRoughnessTexture__", this);
      this ._clearcoatNormalTexture    .addInterest ("set_clearcoatNormalTexture__",    this);

      this .set_clearcoat__ ();
      this .set_clearcoatTexture__ ();
      this .set_clearcoatRoughness__ ();
      this .set_clearcoatRoughnessTexture__ ();
      this .set_clearcoatNormalTexture__ ();
   },
   set_clearcoat__ ()
   {
      this .clearcoat = Math .max (this ._clearcoat .getValue (), 0);
   },
   set_clearcoatTexture__ ()
   {
      this .clearcoatTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._clearcoatTexture);

      this .setTexture (0, this .clearcoatTextureNode);
   },
   set_clearcoatRoughness__ ()
   {
      this .clearcoatRoughness = Algorithm_default().clamp (this ._clearcoatRoughness .getValue (), 0, 1);
   },
   set_clearcoatRoughnessTexture__ ()
   {
      this .clearcoatRoughnessTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._clearcoatRoughnessTexture);

      this .setTexture (1, this .clearcoatRoughnessTextureNode);
   },
   set_clearcoatNormalTexture__ ()
   {
      this .clearcoatNormalTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._clearcoatNormalTexture);

      this .setTexture (2, this .clearcoatNormalTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .CLEARCOAT_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_CLEARCOAT_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .clearcoatTextureNode          ?.getShaderOptions (options, "CLEARCOAT",           true);
      this .clearcoatRoughnessTextureNode ?.getShaderOptions (options, "CLEARCOAT_ROUGHNESS", true);
      this .clearcoatNormalTextureNode    ?.getShaderOptions (options, "CLEARCOAT_NORMAL",    true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f (shaderObject .x3d_ClearcoatEXT,          this .clearcoat);
      gl .uniform1f (shaderObject .x3d_ClearcoatRoughnessEXT, this .clearcoatRoughness);

      if (!+this .getTextureBits ())
         return;

      this .clearcoatTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_ClearcoatTextureEXT,
         this ._clearcoatTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .clearcoatRoughnessTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_ClearcoatRoughnessTextureEXT,
         this ._clearcoatRoughnessTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .clearcoatNormalTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_ClearcoatNormalTextureEXT,
         this ._clearcoatNormalTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (ClearcoatMaterialExtension,
{
   typeName:
   {
      value: "ClearcoatMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                         new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoat",                        new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatTextureMapping",          new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatTexture",                 new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatRoughness",               new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatRoughnessTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatRoughnessTexture",        new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatNormalTextureMapping",    new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "clearcoatNormalTexture",           new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const ClearcoatMaterialExtension_default_ = ClearcoatMaterialExtension;
;

Namespace_default().add ("ClearcoatMaterialExtension", "x_ite/Components/X_ITE/ClearcoatMaterialExtension", ClearcoatMaterialExtension_default_);
/* harmony default export */ const X_ITE_ClearcoatMaterialExtension = (ClearcoatMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/DispersionMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/








function DispersionMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).DispersionMaterialExtension);
}

Object .assign (Object .setPrototypeOf (DispersionMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._dispersion .addInterest ("set_dispersion__", this);

      this .set_dispersion__ ();
   },
   set_dispersion__ ()
   {
      this .dispersion = Math .max (this ._dispersion .getValue (), 0);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .DISPERSION_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_DISPERSION_MATERIAL_EXT");
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f (shaderObject .x3d_DispersionEXT, this .dispersion);
   },
});

Object .defineProperties (DispersionMaterialExtension,
{
   typeName:
   {
      value: "DispersionMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",   new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "dispersion", new (Fields_default()).SFFloat ()),
      ]),
      enumerable: true,
   },
});

const DispersionMaterialExtension_default_ = DispersionMaterialExtension;
;

Namespace_default().add ("DispersionMaterialExtension", "x_ite/Components/X_ITE/DispersionMaterialExtension", DispersionMaterialExtension_default_);
/* harmony default export */ const X_ITE_DispersionMaterialExtension = (DispersionMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/EmissiveStrengthMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/








function EmissiveStrengthMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).EmissiveStrengthMaterialExtension);
}

Object .assign (Object .setPrototypeOf (EmissiveStrengthMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._emissiveStrength .addInterest ("set_emissiveStrength__", this);

      this .set_emissiveStrength__ ();
   },
   set_emissiveStrength__ ()
   {
      this .emissiveStrength = Math .max (this ._emissiveStrength .getValue (), 0);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .EMISSIVE_STRENGTH_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_EMISSIVE_STRENGTH_MATERIAL_EXT");
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f (shaderObject .x3d_EmissiveStrengthEXT, this .emissiveStrength);
   },
});

Object .defineProperties (EmissiveStrengthMaterialExtension,
{
   typeName:
   {
      value: "EmissiveStrengthMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",         new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "emissiveStrength", new (Fields_default()).SFFloat (1)),
      ]),
      enumerable: true,
   },
});

const EmissiveStrengthMaterialExtension_default_ = EmissiveStrengthMaterialExtension;
;

Namespace_default().add ("EmissiveStrengthMaterialExtension", "x_ite/Components/X_ITE/EmissiveStrengthMaterialExtension", EmissiveStrengthMaterialExtension_default_);
/* harmony default export */ const X_ITE_EmissiveStrengthMaterialExtension = (EmissiveStrengthMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/IORMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/








function IORMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).IORMaterialExtension);
}

Object .assign (Object .setPrototypeOf (IORMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._indexOfRefraction .addInterest ("set_indexOfRefraction__", this);

      this .set_indexOfRefraction__ ();
   },
   set_indexOfRefraction__ ()
   {
      this .indexOfRefraction = Math .max (this ._indexOfRefraction .getValue (), 1);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .IOR_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_IOR_MATERIAL_EXT");
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f (shaderObject .x3d_IorEXT, this .indexOfRefraction);
   },
});

Object .defineProperties (IORMaterialExtension,
{
   typeName:
   {
      value: "IORMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",          new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "indexOfRefraction", new (Fields_default()).SFFloat (1.5)),
      ]),
      enumerable: true,
   },
});

const IORMaterialExtension_default_ = IORMaterialExtension;
;

Namespace_default().add ("IORMaterialExtension", "x_ite/Components/X_ITE/IORMaterialExtension", IORMaterialExtension_default_);
/* harmony default export */ const X_ITE_IORMaterialExtension = (IORMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/IridescenceMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function IridescenceMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).IridescenceMaterialExtension);
}

Object .assign (Object .setPrototypeOf (IridescenceMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._iridescence                  .addInterest ("set_iridescence__",                  this);
      this ._iridescenceTexture           .addInterest ("set_iridescenceTexture__",           this);
      this ._iridescenceIndexOfRefraction .addInterest ("set_iridescenceIndexOfRefraction__", this);
      this ._iridescenceThicknessMinimum  .addInterest ("set_iridescenceThicknessMinimum__",  this);
      this ._iridescenceThicknessMaximum  .addInterest ("set_iridescenceThicknessMaximum__",  this);
      this ._iridescenceThicknessTexture  .addInterest ("set_iridescenceThicknessTexture__",  this);

      this .set_iridescence__ ();
      this .set_iridescenceTexture__ ();
      this .set_iridescenceIndexOfRefraction__ ();
      this .set_iridescenceThicknessMinimum__ ();
      this .set_iridescenceThicknessMaximum__ ();
      this .set_iridescenceThicknessTexture__ ();
   },
   set_iridescence__ ()
   {
      this .iridescence = Math .max (this ._iridescence .getValue (), 0);
   },
   set_iridescenceTexture__ ()
   {
      this .iridescenceTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._iridescenceTexture);

      this .setTexture (0, this .iridescenceTextureNode);
   },
   set_iridescenceIndexOfRefraction__ ()
   {
      this .iridescenceIndexOfRefraction = Math .max (this ._iridescenceIndexOfRefraction .getValue (), 1);
   },
   set_iridescenceThicknessMinimum__ ()
   {
      this .iridescenceThicknessMinimum = Math .max (this ._iridescenceThicknessMinimum .getValue (), 0);
   },
   set_iridescenceThicknessMaximum__ ()
   {
      this .iridescenceThicknessMaximum = Math .max (this ._iridescenceThicknessMaximum .getValue (), 0);
   },
   set_iridescenceThicknessTexture__ ()
   {
      this .iridescenceThicknessTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._iridescenceThicknessTexture);

      this .setTexture (1, this .iridescenceThicknessTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .IRIDESCENCE_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_IRIDESCENCE_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .iridescenceTextureNode          ?.getShaderOptions (options, "IRIDESCENCE",           true);
      this .iridescenceThicknessTextureNode ?.getShaderOptions (options, "IRIDESCENCE_THICKNESS", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f (shaderObject .x3d_IridescenceEXT,                  this .iridescence);
      gl .uniform1f (shaderObject .x3d_IridescenceIndexOfRefractionEXT, this .iridescenceIndexOfRefraction);
      gl .uniform1f (shaderObject .x3d_IridescenceThicknessMinimumEXT,  this .iridescenceThicknessMinimum);
      gl .uniform1f (shaderObject .x3d_IridescenceThicknessMaximumEXT,  this .iridescenceThicknessMaximum);

      if (!+this .getTextureBits ())
         return;

      this .iridescenceTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_IridescenceTextureEXT,
         this ._iridescenceTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .iridescenceThicknessTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_IridescenceThicknessTextureEXT,
         this ._iridescenceThicknessTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (IridescenceMaterialExtension,
{
   typeName:
   {
      value: "IridescenceMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                           new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescence",                        new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceTextureMapping",          new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceTexture",                 new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceIndexOfRefraction",       new (Fields_default()).SFFloat (1.3)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceThicknessMinimum",        new (Fields_default()).SFFloat (100)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceThicknessMaximum",        new (Fields_default()).SFFloat (400)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceThicknessTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "iridescenceThicknessTexture",        new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const IridescenceMaterialExtension_default_ = IridescenceMaterialExtension;
;

Namespace_default().add ("IridescenceMaterialExtension", "x_ite/Components/X_ITE/IridescenceMaterialExtension", IridescenceMaterialExtension_default_);
/* harmony default export */ const X_ITE_IridescenceMaterialExtension = (IridescenceMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/SheenMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/










function SheenMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).SheenMaterialExtension);

   this .sheenColorArray = new Float32Array (3);
}

Object .assign (Object .setPrototypeOf (SheenMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._sheenColor            .addInterest ("set_sheenColor__",            this);
      this ._sheenColorTexture     .addInterest ("set_sheenColorTexture__",     this);
      this ._sheenRoughness        .addInterest ("set_sheenRoughness__",        this);
      this ._sheenRoughnessTexture .addInterest ("set_sheenRoughnessTexture__", this);

      this .set_sheenColor__ ();
      this .set_sheenColorTexture__ ();
      this .set_sheenRoughness__ ();
      this .set_sheenRoughnessTexture__ ();
   },
   set_sheenColor__ ()
   {
      //We cannot use this in Windows Edge:
      //this .sheenColorArray .set (this ._sheenColor .getValue ());

      const
         sheenColorArray = this .sheenColorArray,
         sheenColor      = this ._sheenColor .getValue ();

      sheenColorArray [0] = sheenColor .r;
      sheenColorArray [1] = sheenColor .g;
      sheenColorArray [2] = sheenColor .b;
   },
   set_sheenColorTexture__ ()
   {
      this .sheenColorTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._sheenColorTexture);

      this .setTexture (0, this .sheenColorTextureNode);
   },
   set_sheenRoughness__ ()
   {
      this .sheenRoughness = Algorithm_default().clamp (this ._sheenRoughness .getValue (), 0, 1);
   },
   set_sheenRoughnessTexture__ ()
   {
      this .sheenRoughnessTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._sheenRoughnessTexture);

      this .setTexture (1, this .sheenRoughnessTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .SHEEN_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_SHEEN_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .sheenColorTextureNode     ?.getShaderOptions (options, "SHEEN_COLOR",     true);
      this .sheenRoughnessTextureNode ?.getShaderOptions (options, "SHEEN_ROUGHNESS", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform3fv (shaderObject .x3d_SheenColorEXT,     this .sheenColorArray);
      gl .uniform1f  (shaderObject .x3d_SheenRoughnessEXT, this .sheenRoughness);

      const
         browser              = this .getBrowser (),
         SheenELUTTexture     = browser .getLibraryTexture ("lut_sheen_E.png"),
         SheenELUTTextureUnit = browser .getTexture2DUnit ();

      gl .activeTexture (gl .TEXTURE0 + SheenELUTTextureUnit);
      gl .bindTexture (gl .TEXTURE_2D, SheenELUTTexture .getTexture ());
      gl .uniform1i (shaderObject .x3d_SheenELUTTextureEXT, SheenELUTTextureUnit);

      if (!+this .getTextureBits ())
         return;

      this .sheenColorTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_SheenColorTextureEXT,
         this ._sheenColorTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .sheenRoughnessTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_SheenRoughnessTextureEXT,
         this ._sheenRoughnessTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (SheenMaterialExtension,
{
   typeName:
   {
      value: "SheenMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                     new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenColor",                   new (Fields_default()).SFColor ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenColorTextureMapping",     new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenColorTexture",            new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenRoughness",               new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenRoughnessTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "sheenRoughnessTexture",        new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const SheenMaterialExtension_default_ = SheenMaterialExtension;
;

Namespace_default().add ("SheenMaterialExtension", "x_ite/Components/X_ITE/SheenMaterialExtension", SheenMaterialExtension_default_);
/* harmony default export */ const X_ITE_SheenMaterialExtension = (SheenMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/SpecularMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function SpecularMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).SpecularMaterialExtension);

   this .specularColorArray = new Float32Array (3);
}

Object .assign (Object .setPrototypeOf (SpecularMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._specular             .addInterest ("set_specular__",             this);
      this ._specularTexture      .addInterest ("set_specularTexture__",      this);
      this ._specularColor        .addInterest ("set_specularColor__",        this);
      this ._specularColorTexture .addInterest ("set_specularColorTexture__", this);

      this .set_specular__ ();
      this .set_specularTexture__ ();
      this .set_specularColor__ ();
      this .set_specularColorTexture__ ();
   },
   set_specular__ ()
   {
      this .specular = Math .max (this ._specular .getValue (), 0);
   },
   set_specularTexture__ ()
   {
      this .specularTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._specularTexture);

      this .setTexture (0, this .specularTextureNode);
   },
   set_specularColor__ ()
   {
      //We cannot use this in Windows Edge:
      //this .specularColorArray .set (this ._specularColor .getValue ());

      const
         specularColorArray = this .specularColorArray,
         specularColor      = this ._specularColor .getValue ();

      specularColorArray [0] = specularColor .r;
      specularColorArray [1] = specularColor .g;
      specularColorArray [2] = specularColor .b;
   },
   set_specularColorTexture__ ()
   {
      this .specularColorTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._specularColorTexture);

      this .setTexture (1, this .specularColorTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .SPECULAR_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_SPECULAR_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .specularTextureNode      ?.getShaderOptions (options, "SPECULAR",       true);
      this .specularColorTextureNode ?.getShaderOptions (options, "SPECULAR_COLOR", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f  (shaderObject .x3d_SpecularEXT,      this .specular);
      gl .uniform3fv (shaderObject .x3d_SpecularColorEXT, this .specularColorArray);

      if (!+this .getTextureBits ())
         return;

      this .specularTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_SpecularTextureEXT,
         this ._specularTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);

      this .specularColorTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_SpecularColorTextureEXT,
         this ._specularColorTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (SpecularMaterialExtension,
{
   typeName:
   {
      value: "SpecularMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                    new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specular",                    new (Fields_default()).SFFloat (1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularTextureMapping",      new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularTexture",             new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularColor",               new (Fields_default()).SFColor (1, 1, 1)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularColorTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "specularColorTexture",        new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const SpecularMaterialExtension_default_ = SpecularMaterialExtension;
;

Namespace_default().add ("SpecularMaterialExtension", "x_ite/Components/X_ITE/SpecularMaterialExtension", SpecularMaterialExtension_default_);
/* harmony default export */ const X_ITE_SpecularMaterialExtension = (SpecularMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/TransmissionMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function TransmissionMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).TransmissionMaterialExtension);
}

Object .assign (Object .setPrototypeOf (TransmissionMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._transmission        .addInterest ("set_transmission__",        this);
      this ._transmissionTexture .addInterest ("set_transmissionTexture__", this);

      this .set_transmission__ ();
      this .set_transmissionTexture__ ();
   },
   set_transmission__ ()
   {
      this .transmission = Math .max (this ._transmission .getValue (), 0);
   },
   set_transmissionTexture__ ()
   {
      this .transmissionTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._transmissionTexture);

      this .setTexture (0, this .transmissionTextureNode);
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .TRANSMISSION_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_TRANSMISSION_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .transmissionTextureNode ?.getShaderOptions (options, "TRANSMISSION", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      const
         browser            = this .getBrowser (),
         transmissionBuffer = browser .getTransmissionBuffer (),
         transmissionUnit   = browser .getTexture2DUnit ();

      gl .uniform1f (shaderObject .x3d_TransmissionEXT, this .transmission);

      gl .activeTexture (gl .TEXTURE0 + transmissionUnit);
      gl .bindTexture (gl .TEXTURE_2D, transmissionBuffer .getColorTexture ());
      gl .uniform1i (shaderObject .x3d_TransmissionFramebufferSamplerEXT, transmissionUnit);
      gl .uniform2i (shaderObject .x3d_TransmissionFramebufferSizeEXT, transmissionBuffer .getWidth (), transmissionBuffer .getHeight ());

      if (!+this .getTextureBits ())
         return;

      this .transmissionTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_TransmissionTextureEXT,
         this ._transmissionTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (TransmissionMaterialExtension,
{
   typeName:
   {
      value: "TransmissionMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                   new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "transmission",               new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "transmissionTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "transmissionTexture",        new (Fields_default()).SFNode ()),
      ]),
      enumerable: true,
   },
});

const TransmissionMaterialExtension_default_ = TransmissionMaterialExtension;
;

Namespace_default().add ("TransmissionMaterialExtension", "x_ite/Components/X_ITE/TransmissionMaterialExtension", TransmissionMaterialExtension_default_);
/* harmony default export */ const X_ITE_TransmissionMaterialExtension = (TransmissionMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/x_ite/Components/X_ITE/VolumeMaterialExtension.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/









function VolumeMaterialExtension (executionContext)
{
   X_ITE_X3DMaterialExtensionNode .call (this, executionContext);

   this .addType ((X3DConstants_default()).VolumeMaterialExtension);

   this .attenuationColorArray = new Float32Array (3);
}

Object .assign (Object .setPrototypeOf (VolumeMaterialExtension .prototype, X_ITE_X3DMaterialExtensionNode .prototype),
{
   initialize ()
   {
      X_ITE_X3DMaterialExtensionNode .prototype .initialize .call (this);

      this ._thickness            .addInterest ("set_thickness__",          this);
      this ._thicknessTexture    .addInterest ("set_thicknessTexture__",    this);
      this ._attenuationDistance .addInterest ("set_attenuationDistance__", this);
      this ._attenuationColor    .addInterest ("set_attenuationColor__",    this);

      this .set_thickness__ ();
      this .set_thicknessTexture__ ();
      this .set_attenuationDistance__ ();
      this .set_attenuationColor__ ();
   },
   set_thickness__ ()
   {
      this .thickness = Math .max (this ._thickness .getValue (), 0);
   },
   set_thicknessTexture__ ()
   {
      this .thicknessTextureNode = X3DCast_default() ((X3DConstants_default()).X3DSingleTextureNode, this ._thicknessTexture);

      this .setTexture (0, this .thicknessTextureNode);
   },
   set_attenuationDistance__ ()
   {
      this .attenuationDistance = Math .max (this ._attenuationDistance .getValue (), 0);
   },
   set_attenuationColor__ ()
   {
      //We cannot use this in Windows Edge:
      //this .attenuationColorArray .set (this ._attenuationColor .getValue ());

      const
         attenuationColorArray = this .attenuationColorArray,
         attenuationColor      = this ._attenuationColor .getValue ();

      attenuationColorArray [0] = attenuationColor .r;
      attenuationColorArray [1] = attenuationColor .g;
      attenuationColorArray [2] = attenuationColor .b;
   },
   getExtensionKey ()
   {
      return X_ITE_ExtensionKeys .VOLUME_MATERIAL_EXTENSION;
   },
   getShaderOptions (options)
   {
      options .push ("X3D_VOLUME_MATERIAL_EXT");

      if (!+this .getTextureBits ())
         return;

      options .push ("X3D_MATERIAL_TEXTURES");

      this .thicknessTextureNode ?.getShaderOptions (options, "THICKNESS", true);
   },
   setShaderUniforms (gl, shaderObject, renderObject, textureTransformMapping, textureCoordinateMapping)
   {
      gl .uniform1f  (shaderObject .x3d_ThicknessEXT,           this .thickness);
      gl .uniform1f  (shaderObject .x3d_AttenuationDistanceEXT, this .attenuationDistance);
      gl .uniform3fv (shaderObject .x3d_AttenuationColorEXT,    this .attenuationColorArray);

      if (!+this .getTextureBits ())
         return;

      this .thicknessTextureNode ?.setNamedShaderUniforms (gl,
         shaderObject,
         renderObject,
         shaderObject .x3d_ThicknessTextureEXT,
         this ._thicknessTextureMapping .getValue (),
         textureTransformMapping,
         textureCoordinateMapping);
   },
});

Object .defineProperties (VolumeMaterialExtension,
{
   typeName:
   {
      value: "VolumeMaterialExtension",
      enumerable: true,
   },
   componentInfo:
   {
      value: Object .freeze ({ name: "X_ITE", level: 1 }),
      enumerable: true,
   },
   containerField:
   {
      value: "extensions",
      enumerable: true,
   },
   specificationRange:
   {
      value: Object .freeze ({ from: "4.0", to: "Infinity" }),
      enumerable: true,
   },
   fieldDefinitions:
   {
      value: new (FieldDefinitionArray_default()) ([
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "metadata",                new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "thickness",               new (Fields_default()).SFFloat ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "thicknessTextureMapping", new (Fields_default()).SFString ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "thicknessTexture",        new (Fields_default()).SFNode ()),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "attenuationDistance",     new (Fields_default()).SFFloat (1_000_000)),
         new (X3DFieldDefinition_default()) ((X3DConstants_default()).inputOutput, "attenuationColor",        new (Fields_default()).SFColor (1, 1, 1)),
      ]),
      enumerable: true,
   },
});

const VolumeMaterialExtension_default_ = VolumeMaterialExtension;
;

Namespace_default().add ("VolumeMaterialExtension", "x_ite/Components/X_ITE/VolumeMaterialExtension", VolumeMaterialExtension_default_);
/* harmony default export */ const X_ITE_VolumeMaterialExtension = (VolumeMaterialExtension_default_);
;// CONCATENATED MODULE: ./src/assets/components/X_ITE.js
/*******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011 - 2022.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2011 - 2022, Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the X_ITE Project.
 *
 * X_ITE is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * X_ITE is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with X_ITE.  If not, see <https://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/


















Components_default().add ({
   name: "X_ITE",
   concreteNodes:
   [
      X_ITE_BlendMode,
      X_ITE_DepthMode,
      X_ITE_InstancedShape,
      X_ITE_SpecularGlossinessMaterial,
      X_ITE_AnisotropyMaterialExtension,
      X_ITE_ClearcoatMaterialExtension,
      X_ITE_DispersionMaterialExtension,
      X_ITE_EmissiveStrengthMaterialExtension,
      X_ITE_IORMaterialExtension,
      X_ITE_IridescenceMaterialExtension,
      X_ITE_SheenMaterialExtension,
      X_ITE_SpecularMaterialExtension,
      X_ITE_TransmissionMaterialExtension,
      X_ITE_VolumeMaterialExtension,
   ],
   abstractNodes:
   [
      X_ITE_X3DMaterialExtensionNode,
   ],
});

const X_ITE_default_ = undefined;
;

Namespace_default().add ("X_ITE", "assets/components/X_ITE", X_ITE_default_);
/* harmony default export */ const X_ITE = ((/* unused pure expression or super */ null && (X_ITE_default_)));
/******/ })()
;