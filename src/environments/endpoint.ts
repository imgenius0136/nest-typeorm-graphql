import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { CommerceModule } from "src/commerce/commerce.module";
import { HospitalModule } from "src/hospital/hospital.module";
import { UserModule } from "src/user/user.module";

export const adminEndpotin = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    // autoSchemaFile: join(process.cwd(), 'src/user/admin.schema.gql'),
    autoSchemaFile: join(process.cwd(), 'src/user/schema.gql'),
    sortSchema: true,
    path: "admin",
    include: [UserModule]
  })

export const hospitalEndpoint = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    // autoSchemaFile: join(process.cwd(), 'src/hospital/hospital.schema.gql'),
    autoSchemaFile: join(process.cwd(), 'src/hospital/schema.gql'),
    sortSchema: true,
    path: "hospital",
    include: [HospitalModule]
})

export const commerceEndpoint = GraphQLModule.forRoot({
    debug: true,
    playground: true,
    // autoSchemaFile: join(process.cwd(), 'src/commerce/commerce.schema.gql'),
    autoSchemaFile: join(process.cwd(), 'src/commerce/schema.gql'),
    sortSchema: true,
    include: [CommerceModule]
})