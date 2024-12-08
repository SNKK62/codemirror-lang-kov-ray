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
        "center": t.moduleKeyword,
        "radius": t.moduleKeyword,
        "vertex": t.moduleKeyword,
        "material": t.moduleKeyword,
        "translate": t.moduleKeyword,
        "rotateX": t.moduleKeyword,
        "rotateY": t.moduleKeyword,
        "rotateZ": t.moduleKeyword,
        // keywords
        "Camera": t.keyword,
        "Config": t.keyword,
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
