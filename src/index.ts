import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const KOVRayLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      // indentNodeProp.add({
      //   Application: delimitedIndent({closing: ")", align: false})
      // }),
      // foldNodeProp.add({
      //   Application: foldInside
      // }),
      styleTags({
        Identifier: t.attributeValue,
        Number: t.number,
        LineComment: t.lineComment,
        "( )": t.paren,
        "{ }": t.brace,

        Camera: t.labelName,
        Config: t.labelName,
        // object
        Sphere: t.labelName,
        Box: t.labelName,
        Plane: t.labelName,
        Objs: t.labelName,
        // material
        Lambertian: t.className,
        Metal: t.className,
        Dielectric: t.className,
        Light: t.className,
        // texture
        Solid: t.typeName,
        Checker: t.typeName,
        Perlin: t.typeName,
        // vector bracket
        VectorStart: t.angleBracket,
        VectorEnd: t.angleBracket,
        // property names
        Center: t.attributeValue,
        Radius: t.attributeValue,
        Vertex: t.attributeValue,
        Material: t.attributeValue,
        Translate: t.attributeValue,
        RotateX: t.attributeValue,
        RotateY: t.attributeValue,
        RotateZ: t.attributeValue,
        Lookfrom: t.attributeValue,
        LookAt: t.attributeValue,
        Up: t.attributeValue,
        Angle : t.attributeValue,
        DistToFocus: t.attributeValue,
        Width: t.attributeValue,
        Height: t.attributeValue,
        SamplesPerPixel: t.attributeValue,
        MaxDepth: t.attributeValue,
        Background: t.attributeValue,
        // keywords
        "if": t.keyword,
        "else": t.keyword,
        "while": t.keyword,
        "break": t.keyword,
        "continue": t.keyword,
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "//"}
  }
})

export function KOVRay() {
  return new LanguageSupport(KOVRayLanguage)
}
