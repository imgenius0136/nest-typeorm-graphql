import { Injectable } from '@nestjs/common';
import { logger } from '.';

@Injectable()
export class LoggerService {
  debug(message: string) {
    logger.debug(message);
  }
  info(message: string) {
    logger.info(message);
  }
  warning(message: string) {
    logger.warning(message);
  }
  error(message: string) {
    logger.error(message);
  }
}
