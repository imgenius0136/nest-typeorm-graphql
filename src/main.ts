import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
// import tracer from 'dd-trace';
import { logger } from './config/logger/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const connection = getConnection('default');
  const { isConnected } = connection;

  isConnected
    ? logger.info('Database connected')
    : logger.error('Database connect error');

  // tracer.init();

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TimeoutInterceptor());

  await app.listen(process.env.PORT);
}
bootstrap();
