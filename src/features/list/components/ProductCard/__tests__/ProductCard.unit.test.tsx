// ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import ProductCard from '../index';

const product = {
    id: '123',
    name: 'Test Product',
    brand: 'BrandX',
    basePrice: 99,
    imageUrl: '/test.jpg',
};

describe('<ProductCard />', () => {
    it('renders product information correctly', () => {
        render(<ProductCard product={product} />);
        expect(screen.getByText(/test product/i)).toBeInTheDocument();
        expect(screen.getByText(/brandx/i)).toBeInTheDocument();
        expect(screen.getByText(/99 eur/i)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute(
            'alt',
            expect.stringContaining(product.name),
        );
    });
});
