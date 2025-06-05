import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Flexbox from '@/components/Flexbox';

describe('Flexbox snapshot', () => {
    it('matches snapshot', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Flexbox column align="center" justify="center" gap={16}>
                    <div>Child 1</div>
                    <div>Child 2</div>
                </Flexbox>
            </ThemeProvider>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});
