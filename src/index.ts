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
        "center": t.macroName,
        "radius": t.macroName,
        "vertex": t.macroName,
        "material": t.macroName,
        "translate": t.macroName,
        "rotateX": t.macroName,
        "rotateY": t.macroName,
        "rotateZ": t.macroName,
        "lookfrom": t.macroName,
        "lookat": t.macroName,
        "up": t.macroName,
        "angle": t.macroName,
        "dist_to_focus": t.macroName,
        "width": t.macroName,
        "height": t.macroName,
        "samples_per_pixel": t.macroName,
        "max_depth": t.macroName,
        "background": t.macroName,
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
