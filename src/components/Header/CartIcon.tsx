import Image from 'next/image';
import { CartIconProps } from './types';
import styled from 'styled-components';

const CartIcon = ({ filled }: CartIconProps) => (
    <StyledImage
        src={`/bag${filled ? '-filled' : ''}.svg`}
        alt="Shopping cart"
        width={filled ? 32 : 24}
        height={filled ? 32 : 24}
        style={{ display: 'block' }}
    />
);

const StyledImage = styled(Image)`
    display: block;
`;

export default CartIcon;
