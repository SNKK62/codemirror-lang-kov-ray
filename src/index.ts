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
        Identifier: t.literal,
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
        "center": t.keyword,
        "radius": t.keyword,
        "vertex": t.keyword,
        "material": t.keyword,
        "translate": t.keyword,
        "rotateX": t.keyword,
        "rotateY": t.keyword,
        "rotateZ": t.keyword,
        "lookfrom": t.keyword,
        "lookat": t.keyword,
        "up": t.keyword,
        "angle": t.keyword,
        "dist_to_focus": t.keyword,
        "width": t.keyword,
        "height": t.keyword,
        "samples_per_pixel": t.keyword,
        "max_depth": t.keyword,
        "background": t.keyword,
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
