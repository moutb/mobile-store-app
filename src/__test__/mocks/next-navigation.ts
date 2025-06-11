export const mockPush = jest.fn();
export const mockRouter = {
    push: mockPush,
};
export const mockSearchParams = jest.fn(() => new URLSearchParams());

jest.mock('next/navigation', () => {
    const actual = jest.requireActual('next/navigation');
    return {
        ...actual,
        useRouter: () => mockRouter,
        useSearchParams: () => mockSearchParams(),
    };
});
