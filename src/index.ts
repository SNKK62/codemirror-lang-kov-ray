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
        Identifier: t.macroName,
        Number: t.number,
        LineComment: t.lineComment,
        "( )": t.paren,
        "{ }": t.brace,

        "Camera": t.keyword,
        "Config": t.keyword,
        // object
        "Sphere": t.labelName,
        "Box": t.labelName,
        "Plane": t.labelName,
        "Objs": t.labelName,
        // material
        "Lambertian": t.className,
        "Metal": t.className,
        "Dielectric": t.className,
        "Light": t.className,
        // texture
        "Solid": t.typeName,
        "Checker": t.typeName,
        "Perlin": t.typeName,
        // vector bracket
        VectorStart: t.angleBracket,
        VectorEnd: t.angleBracket,
        // property names
        "center": t.attributeName,
        "radius": t.attributeName,
        "vertex": t.attributeName,
        "material": t.attributeName,
        "translate": t.attributeName,
        "rotateX": t.attributeName,
        "rotateY": t.attributeName,
        "rotateZ": t.attributeName,
        "lookfrom": t.attributeName,
        "lookat": t.attributeName,
        "up": t.attributeName,
        "angle": t.attributeName,
        "dist_to_focus": t.attributeName,
        "width": t.attributeName,
        "height": t.attributeName,
        "samples_per_pixel": t.attributeName,
        "max_depth": t.attributeName,
        "background": t.attributeName,
        // keywords
        "break": t.keyword,
        "continue": t.keyword,
        "if": t.keyword,
        "else": t.keyword,
        "while": t.keyword,
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
