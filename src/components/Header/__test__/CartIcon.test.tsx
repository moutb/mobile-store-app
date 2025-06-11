import { render, screen, waitFor } from '@testing-library/react';
import CartIcon from '../CartIcon';
import { axe } from 'jest-axe';

describe('CartIcon', () => {
    it('renders unfilled icon by default', () => {
        render(<CartIcon filled={false} />);
        const image = screen.getByRole('img', { name: /shopping cart/i });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            'src',
            expect.stringContaining('/bag.svg'),
        );
        expect(image).toHaveAttribute('width', '24');
        expect(image).toHaveAttribute('height', '24');
    });

    it('renders filled icon when prop is true', () => {
        render(<CartIcon filled />);
        const image = screen.getByRole('img', { name: /shopping cart/i });
        expect(image).toHaveAttribute(
            'src',
            expect.stringContaining('/bag-filled.svg'),
        );
        expect(image).toHaveAttribute('width', '32');
        expect(image).toHaveAttribute('height', '32');
    });

    it('passes accessibility checks', async () => {
        const { container } = await waitFor(() =>
            render(<CartIcon filled={true} />),
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
