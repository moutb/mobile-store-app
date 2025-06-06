import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ProductCard from '../index';

expect.extend(toHaveNoViolations);

const product = {
    id: '123',
    name: 'Test Product',
    brand: 'BrandX',
    basePrice: 99,
    imageUrl: '/test.jpg',
};

it('has no accessibility violations', async () => {
    const { container } = render(<ProductCard product={product} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
