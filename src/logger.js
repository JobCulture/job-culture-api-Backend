import { format, transports, createLogger } from 'winston';


const logger = createLogger({
    transports: [
      new transports.Console(),
    ],
    format: format.combine(
        format.timestamp({  format: 'YYYY-MM-DD HH:mm:ss' }),
        format.simple(),
        format.colorize(),
    ),
});

export default logger;
