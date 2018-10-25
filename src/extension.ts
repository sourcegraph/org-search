import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const goImportsRegex = /\bgo.imports:([\w\/]*)/
           if (query.match(goImportsRegex)) {
               // Get package name
               const pkgFilter = query.match(goImportsRegex)
               const pkg = pkgFilter && pkgFilter.length >= 1 ? pkgFilter[1] : ''

               // Package imported in grouped import statements
               const matchPackage = '\\t\"' + pkg + '\"'
               // Match packages with aliases
               const matchAlias = '\\t(.*)\\s\"' + pkg + '\"'
               // Match packages in single import statement
               const matchSingle = 'import\\s\"' + pkg + '\"'
               const finalRegex = `(${matchPackage}|${matchAlias}|${matchSingle})`

               return query.replace(goImportsRegex  , finalRegex)
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
