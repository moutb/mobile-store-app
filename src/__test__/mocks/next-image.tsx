/* eslint-disable jsx-a11y/alt-text, @next/next/no-img-element */
jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => {
        // Remove priority prop for snapshot testing
        delete props.priority;
        return <img {...props} />;
    },
}));
