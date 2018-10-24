import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformProvider({
       transformQuery: (query: string) => {
           const orgRegex = /\borg:(.\w*)/
           if (query.match(orgRegex)) {
               const orgFilter = query.match(orgRegex)
               const org = orgFilter && orgFilter.length >= 1 ? orgFilter[1] : ''
               if (org !== '') {
                   return query.replace(orgRegex  , `r:${org}/`)
               }

           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
