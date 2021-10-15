import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { CommerceModule } from "src/presenter/commerce/commerce.module";
import { HospitalModule } from "src/presenter/hospital/hospital.module";
import { UserModule } from "src/presenter/user/user.module";

export const adminRoute = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/presenter/user/schema.gql'),
    sortSchema: true,
    path: "admin",
    include: [UserModule],
  })

export const hospitalRoute = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/presenter/hospital/schema.gql'),
    sortSchema: true,
    path: "hospital",
    include: [HospitalModule],
    subscriptions: {
     "graphql-ws": true
    }
})

export const commerceRoute = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/presenter/commerce/schema.gql'),
    sortSchema: true,
    include: [CommerceModule],
})