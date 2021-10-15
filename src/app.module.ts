import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HospitalModule } from './presenter/hospital/hospital.module';
import { UserModule } from './presenter/user/user.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { adminRoute, hospitalRoute } from './environments/route';
import { typeOrmConfig } from './environments/orm';

@Module({
  imports: [
    ConfigModule.forRoot(),

    typeOrmConfig,

    adminRoute,
    hospitalRoute,

    HospitalModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
