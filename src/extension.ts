import * as sourcegraph from 'sourcegraph'

export function activate(): void {
   sourcegraph.search.registerSearchProvider({
       transformQuery: (query: string) => {
           if (query.includes('org:sourcegraph')) {
               const q = query.replace(/\borg:sourcegraph\b/g, 'r:sourcegraph/')
               return q
           }
           return query
        }
   })
}

// See https://about.sourcegraph.com/blog/extension-authoring for instructions and examples.
