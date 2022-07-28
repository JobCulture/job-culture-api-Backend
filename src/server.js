// initalize env vars by file
import dotenv from 'dotenv';
dotenv.config();

// typeorm requirement
import "reflect-metadata";

import logger from './logger';

const initTypeorm = () => {
    logger.info("initializing TypeORM...")
    const { dataSource } = require('./typeormConfig');
    return dataSource.initialize()
}

const initExpress = () => {
    logger.info("initializing API Server...")
    const { initServer } = require('./serverConfig');
    return initServer();
}

// initialize typeorm configuration and express app with routes
initTypeorm().then(() => initExpress());
