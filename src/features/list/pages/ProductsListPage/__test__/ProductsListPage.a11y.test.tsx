// __tests__/ProductListPage.accessibility.test.tsx
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import ProductListPage from '..';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import defaultProps from './default-props';
import '@/__test__/mocks/intersection-observer';

describe('<ProductListPage /> a11y', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <ProductListPage {...defaultProps} />
            </ThemeProvider>,
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
