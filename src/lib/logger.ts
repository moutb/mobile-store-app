// lib/logger.ts
import pino from 'pino';
import { config } from './config';

const { isDebug } = config;

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
        },
    },
    level: !isDebug ? 'info' : 'debug',
});

export default logger;
