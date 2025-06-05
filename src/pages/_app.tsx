import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CartProvider } from '@/features/cart/context/CartContext';
import { AppPropsWithLayout } from '@/types/pages';
import { GlobalStyle } from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CartProvider>
                {getLayout(<Component {...pageProps} />)}
            </CartProvider>
        </ThemeProvider>
    );
}
