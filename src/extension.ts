import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerSearchProvider({
       transformQuery: (query: string) => {
           if (query.match('org:sourcegraph')) {
               return query.replace(/\borg:sourcegraph\b/g, 'r:sourcegraph/')
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
