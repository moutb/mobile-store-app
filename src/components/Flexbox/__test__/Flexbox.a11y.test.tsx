import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Flexbox from '@/components/Flexbox';

describe('Flexbox accessibility', () => {
    it('should have no a11y violations', async () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Flexbox>
                    <div>Accessible content</div>
                </Flexbox>
            </ThemeProvider>,
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
