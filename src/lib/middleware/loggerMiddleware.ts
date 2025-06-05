import type { NextApiRequest, NextApiResponse } from 'next';
import logger from '../logger';
import { ErrorEntity } from '@/api/types';
import { config } from '../config';

const { isDebug } = config;

export const withLogger =
    (
        handler: (
            req: NextApiRequest,
            res: NextApiResponse,
        ) => Promise<void> | void,
    ) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        const start = Date.now();

        logger.info(
            {
                method: req.method,
                url: req.url,
                body: req.body,
                query: req.query,
            },
            'Request',
        );

        try {
            await handler(req, res);
        } catch (error) {
            logger.error({ error }, 'Unhandled error in handler');
            res.status(500).json({
                error: 'Internal Server Error',
                message:
                    error instanceof Error ? error.message : 'Unknown error',
            } as ErrorEntity);
        } finally {
            if (isDebug) {
                const duration = Date.now() - start;
                logger.debug(
                    {
                        method: req.method,
                        url: req.url,
                        duration: `${duration}ms`,
                        statusCode: res.statusCode,
                    },
                    'Request completed',
                );
            }
        }
    };
