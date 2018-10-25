import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const phpImportsRegex = /\bphp.imports:([^\s]*)/i
           if (query.match(phpImportsRegex)) {
               const phpImportsFilter = query.match(phpImportsRegex)
               const phpPkg = phpImportsFilter && phpImportsFilter.length >= 1 ? phpImportsFilter[1] : ''
               const phpImport = '\buse(.*)' + phpPkg + '[^\\s]*;'
               return query.replace(phpImportsRegex  , `(${phpImport})`)
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
