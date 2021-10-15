import { TypeOrmModule } from "@nestjs/typeorm";
import { Hospital } from "src/entity/hospital.entity";
import { User } from "src/entity/user.entity";

export const typeOrmConfig = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "wnffkdl@4510",
    database: 'commerce',
    entities: [User, Hospital],
    synchronize: false,
  })