// __tests__/ProductListPage.snapshot.test.tsx
import { render } from '@testing-library/react';
import '@/__test__/mocks/next-navigation';
import ProductListPage from '..';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import defaultProps from './default-props';
import '@/__test__/mocks/intersection-observer';

describe('<ProductListPage /> snapshot', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <ThemeProvider theme={theme}>
                <ProductListPage {...defaultProps} />
            </ThemeProvider>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
