import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
    imports: [
      HttpClientModule,
      ApolloModule,
      HttpLinkModule
    ]
})

export class ApolloConfigModule {

    constructor(private apollo : Apollo, private httpLink : HttpLink) { 

        const uri  = 'https://api.graph.cool/simple/v1/cjjryaunc17q20109v19r66gk';
        const HTTP = httpLink.create({ uri });

        apollo.create({
            link: HTTP,
            cache: new InMemoryCache()
        })

     }

 }