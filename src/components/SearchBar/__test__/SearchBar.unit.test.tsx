import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../index';

describe('<SearchBar />', () => {
    it('renders with initial value', () => {
        render(<SearchBar value="Galaxy" onChange={() => {}} />);
        const input = screen.getByPlaceholderText(/Search for a smartphone/i);
        expect(input).toHaveValue('Galaxy');
    });

    it('calls onChange when input changes', () => {
        const handleChange = jest.fn();
        render(<SearchBar value="" onChange={handleChange} />);
        const input = screen.getByPlaceholderText(/Search for a smartphone/i);
        fireEvent.change(input, { target: { value: 'Pixel' } });
        expect(handleChange).toHaveBeenCalledWith('Pixel');
    });

    it('shows and triggers clear button', () => {
        const handleChange = jest.fn();
        render(<SearchBar value="iPhone" onChange={handleChange} />);
        const button = screen.getByRole('button', {
            name: /Clear search input/i,
        });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleChange).toHaveBeenCalledWith('');
    });

    it('disables the input when disabled prop is true', () => {
        render(<SearchBar value="" onChange={() => {}} disabled />);
        const input = screen.getByPlaceholderText(/Search for a smartphone/i);
        expect(input).toBeDisabled();
    });
});
