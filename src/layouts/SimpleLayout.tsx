import { ReactNode } from 'react';
import Header from '@/components/Header';
import Container from '@/components/Container';
import styled from 'styled-components';

type SimpleLayoutProps = {
    children: ReactNode;
};

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <MainContainer>{children}</MainContainer>
        </>
    );
};

const MainContainer = styled(Container)``;

export default SimpleLayout;
