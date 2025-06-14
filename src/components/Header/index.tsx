import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from '@/features/cart/context/CartContext';
import Flexbox from '../Flexbox';
import Container from '../Container';
import Image from 'next/image';
import CarIcon from './CartIcon';
import { HeaderProps } from './types';

const Header = ({ showCart = false, clear = false }: HeaderProps) => {
    const { state } = useCart();
    const totalItems = state.products.length;

    return (
        <HeaderContainer
            as="header"
            role="banner"
            className={clear ? '' : 'header--bottom-bordered'}
        >
            <Flexbox as="nav" aria-label="Main navigation">
                <Link href="/" aria-label="Navigate to home page">
                    <Logo
                        src="/mbst.svg"
                        alt="Logo"
                        width={148}
                        height={48}
                        priority
                    />
                </Link>
                {showCart && (
                    <Cart href="/cart" aria-label="Navigate to shopping cart">
                        <CarIcon filled={totalItems > 0} />
                        <CartNumber>{totalItems}</CartNumber>
                    </Cart>
                )}
            </Flexbox>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled(Container)`
    height: var(--header-height);
    padding-top: var(--spacing-4);
    padding-bottom: var(--spacing-4);

    &.header--bottom-bordered {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }

    & > nav {
        height: 100%;
    }
`;

const Logo = styled(Image)`
    display: block;
    width: 100%;
    height: auto;
`;

const Cart = styled(Link)`
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;
`;

const CartNumber = styled.span`
    font-size: var(--font-size-base);
    line-height: var(--font-size-base);
    font-weight: var(--font-weight-thin);
    color: var(--color-text);
    text-transform: uppercase;
    flex-grow: 0;
    /* small adjust because of Helvetica numbers Typography issue */
    transform: translateY(2px);
`;
