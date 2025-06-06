import { listProducts } from '@/api/products';
import { ErrorEntity, Page } from '@/api/types';
import logger from '@/lib/logger';
import { withLogger } from '@/lib/middleware/loggerMiddleware';
import { ProductListItem } from '@/types/product';
import { toNumberIfPossible } from '@/utils/toNumberIfPossible';
import type { NextApiRequest, NextApiResponse } from 'next';

type OptionalParam<T> = T | undefined;

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Page<ProductListItem>>,
) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end({
            error: 'Method Not Allowed',
            message: `Method ${req.method} Not Allowed`,
        } as ErrorEntity);
    }
    const { search, limit, offset } = req.query;

    const productsPage = await listProducts({
        search: search as OptionalParam<string>,
        limit: toNumberIfPossible(limit as OptionalParam<string>),
        offset: toNumberIfPossible(offset as OptionalParam<string>),
    });

    logger.info(
        `Fetched products with search: ${search}, limit: ${limit}, offset: ${offset}`,
        productsPage,
    );

    res.status(200).json(productsPage);
}

export default withLogger(handler);
