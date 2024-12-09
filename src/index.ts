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
        Identifier: t.string,
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
        "center radius vertex material translate rotateX rotateY rotateZ lookfrom lookat up angle dist_to_focus width height samples_per_pixel max_depth background": t.name,
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
