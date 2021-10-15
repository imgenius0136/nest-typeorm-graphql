import { Injectable } from "@nestjs/common";
import { GqlModuleOptions, GqlOptionsFactory } from "@nestjs/graphql";

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions | Promise<GqlModuleOptions> {
        return {
            
        }
    }
}