import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CartProvider } from '@/features/cart/context/CartContext';
import { AppPropsWithLayout } from '@/types/pages';
import { GlobalStyle } from '@/styles/GlobalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const metadata = Component.metadata ? Component.metadata(pageProps) : {};
    return (
        <>
            <Head>
                <title>{`${metadata.title ? metadata.title + ' | ' : ''}MBST`}</title>
                <meta
                    name="description"
                    content={
                        metadata.description ||
                        'MBST - Your smartphones online store'
                    }
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CartProvider>
                    {getLayout(<Component {...pageProps} />)}
                </CartProvider>
            </ThemeProvider>
        </>
    );
}
