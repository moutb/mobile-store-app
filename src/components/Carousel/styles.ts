import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: 0.5rem;
    width: 100%;
`;

export const NavButton = styled.button`
    background: none;
    border: none;
    font-size: var(--font-size-md);
    cursor: pointer;
    color: var(--color-primary);
    padding: 0 0.5rem;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:focus {
        outline: 2px solid currentColor;
    }
`;

export const CarouselTrack = styled.div`
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    flex: 1;
    width: 100%;
    user-select: none;
`;

export const CarouselItem = styled.div<{ $visibleCount: number }>`
    flex: 0 0 calc(100% / ${({ $visibleCount }) => $visibleCount});
    scroll-snap-align: start;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-secondary);
    margin-top: var(--spacing-6);
    position: relative;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
`;

export const ScrollThumb = styled.div`
    position: absolute;
    height: 100%;
    background-color: var(--color-primary);
    border-radius: 2px;
    transition: left 0.2s ease;
`;
