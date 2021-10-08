import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './config/middleware';
import { UserModule } from './user/user.module';
import { adminEndpotin, hospitalEndpoint } from './environments/endpoint';
import { HospitalModule } from './hospital/hospital.module';
import { typeOrm } from './environments/orm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    typeOrm,

    adminEndpotin,
    hospitalEndpoint,
    
    HospitalModule,
    UserModule,
    
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/")
  }
}
