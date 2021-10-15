/*
---------------------
|  project          |
---------------------
*/
export const PROJECT_NAME = process.env.APP_NAME || 'blue-nest';
export const PROJECT_ENV = process.env.NODE_ENV || 'dev';
export const TIMEOUT_SEC = 100000;

/*
---------------------
|  database         |
---------------------
*/
export const DATABASE_HOST = process.env.MYSQL_HOST || 'localhost';
export const DATABASE_USER = process.env.MYSQL_USERNAME || 'root';
export const DATABASE_PASSWORD = process.env.MYSQL_PASSWORD || 'wnffkdl@4510';
export const DATABASE_NAME = process.env.MYSQL_DATABASE_NAME || 'commerce';

/*
---------------------
|  etc              |
---------------------
*/
export const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de';
