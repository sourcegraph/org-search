import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const javaImportsRegex = /\bjava.imports:([^\s]*)/i
           if (query.match(javaImportsRegex)) {
               const javaImportsFilter = query.match(javaImportsRegex)
               const javaPkg = javaImportsFilter && javaImportsFilter.length >= 1 ? javaImportsFilter[1] : ''
               const javaImport = '^import(.*)' + javaPkg + '[^\\s]*'
               return query.replace(javaImportsRegex  , `(${javaImport})`)
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
