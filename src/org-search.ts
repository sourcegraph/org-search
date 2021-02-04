import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerQueryTransformer({
       transformQuery: (query: string) => {
           const orgRegex = /\borg:([\w-]*)/
           if (query.match(orgRegex)) {
               const orgFilter = query.match(orgRegex)
               const org = orgFilter && orgFilter.length >= 1 ? orgFilter[1] : ''
               return query.replace(orgRegex  , `r:${org}/`)

           }
           return query
        }
   })
}
