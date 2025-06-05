import Image from 'next/image';
import { CartIconProps } from './types';
import styled from 'styled-components';

const CartIcon = ({ filled }: CartIconProps) => (
    <StyledImage
        src={`/bag${filled ? '-filled' : ''}.svg`}
        alt="Shopping cart"
        width={filled ? 24 : 18}
        height={filled ? 24 : 18}
    />
);

const StyledImage = styled(Image)`
    display: block;
`;

export default CartIcon;
