import { DataSource } from 'typeorm';
import { Sample } from './models/sample';

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.APP_ENV === 'development', // shouldn't be used in production - otherwise you can lose production data.
    entities: [Sample]
})
