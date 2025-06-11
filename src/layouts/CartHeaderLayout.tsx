import { ReactNode } from 'react';
import Header from '@/components/Header';
import Container from '@/components/Container';
import styled from 'styled-components';

type CartHeaderLayoutProps = {
    children: ReactNode;
};

const CartHeaderLayout: React.FC<CartHeaderLayoutProps> = ({ children }) => {
    return (
        <>
            <Header showCart clear />
            <MainContainer>{children}</MainContainer>
        </>
    );
};

const MainContainer = styled(Container)`
    padding-bottom: var(--spacing-6);
`;

export default CartHeaderLayout;
