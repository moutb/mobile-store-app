import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SearchBar from '../index';

it('passes accessibility tests', async () => {
    const { container } = render(
        <SearchBar value="search" onChange={() => {}} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
