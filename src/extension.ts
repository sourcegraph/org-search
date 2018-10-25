import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const pyImportsRegex = /\bpy.imports:([^\s]*)/i
           if (query.match(pyImportsRegex)) {
               const pyImportsFilter = query.match(pyImportsRegex)
               const pyPkg = pyImportsFilter && pyImportsFilter.length >= 1 ? pyImportsFilter[1] : ''
               const singleImport = '^import\\s' + pyPkg + '$'
               const namedImport = '^import\\s' + pyPkg + '\\sas\\s[^\\s]*'
               const scopedImport = '^from\\s(.*)\\simport\\s(.*)' + pyPkg
               return query.replace(pyImportsRegex  , `(${singleImport}|${namedImport}|${scopedImport})`)
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
