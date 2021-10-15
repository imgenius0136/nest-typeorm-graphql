import winston, { createLogger, format, transports } from 'winston';

import { PROJECT_NAME } from 'src/environments/envConstant';

var moment = require('moment');

// 0, 1, 2, 3, 4, 5, 6
const levels = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  http: 'http',
  verbose: 'verbose',
  debug: 'debug',
  silly: 'silly',
};

let today = moment().format('YYYY-MM-DD');

const logger = createLogger({
  level: levels.info,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: PROJECT_NAME },
  transports: [
    new transports.File({
      filename: `logs/error/error-${today}.log`,
      level: levels.error,
    }),
    new transports.File({
      filename: `logs/info-${today}.log`,
      level: levels.info,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export { logger };
