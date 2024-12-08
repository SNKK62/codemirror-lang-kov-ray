# CodeMirror KOV-Ray language support

This is based on the [CodeMirror language support template](https://github.com/codemirror/lang-example).

This is a minimal [CodeMirror](https://codemirror.net/6/) language support package for [KOV-Ray](https://github.com/SNKK62/KOV-Ray).


## How to build

```sh
npm install
npm run prepare
```

## Grammer

The grammar is defined in `src/syntax.grammar`. It is a simple LALR(1) grammar that defines the syntax of the language. The grammar is written in a custom format that is similar to BNF, but more compact and with some additional features. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

## How to test(Not implemented yet)

The test file is `test/cases.txt`.

```sh
npm test
```

