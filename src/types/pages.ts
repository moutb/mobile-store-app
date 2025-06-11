import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
    metadata?: (props: P) => {
        title?: string;
        description?: string;
    };
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
