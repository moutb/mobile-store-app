export * from './error';

export interface PageParams {
    limit?: number;
    offset?: number;
}

export interface Page<T> {
    offset: number;
    limit: number;
    list: T[];
}

export interface ListProductsParams extends PageParams {
    search?: string;
}
