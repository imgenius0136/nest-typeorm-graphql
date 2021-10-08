import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { BlueLogger } from './config/logger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new BlueLogger()
  });

  const connection = getConnection('default')
  const { isConnected } = connection

  const logger = new BlueLogger()
  isConnected ? logger.log("Database connected") : logger.error("Database connect error")
  
  await app.listen(process.env.PORT);
}
bootstrap();
