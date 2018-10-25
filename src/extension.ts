import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const jsImportsRegex = /\bjs.depends:([^\s]*)/
           if (query.match(jsImportsRegex)) {
               const jsImportsFilter = query.match(jsImportsRegex)
               const jsPkg = jsImportsFilter && jsImportsFilter.length >= 1 ? jsImportsFilter[1] : ''
               const es6Import = '^import(.*)\''+jsPkg+'[^\\s]*\''
               const commonJSImport = 'require\\(\'' +jsPkg+'[^\\s]*\'\\)'
               return query.replace(jsImportsRegex  , `(${es6Import}|${commonJSImport})`)
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
