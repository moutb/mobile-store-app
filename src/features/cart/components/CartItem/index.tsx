'use client';
import { useCart } from '../../context/CartContext';
import { CartProduct } from '../../types';
import {
    Description,
    Info,
    ItemContainer,
    Name,
    Price,
    ProductImage,
    ProductImageWrapper,
    RemoveButton,
    Spacer,
} from './styles';

const CartItem = ({ product }: { product: CartProduct }) => {
    const { removeFromCart } = useCart();

    return (
        <ItemContainer
            role="group"
            aria-label={`${product.name}, ${product.color.name}, ${product.storage.capacity}`}
            className="cart--product-item"
        >
            <ProductImageWrapper>
                <ProductImage
                    src={product.color.imageUrl}
                    alt={`Product image of ${product.name} in ${product.color.name}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="100vw"
                />
            </ProductImageWrapper>
            <Info>
                <Name data-testid="cart-item-name">{product.name}</Name>
                <Description data-testid="cart-item-description">
                    {product.storage.capacity} | {product.color.name}
                </Description>
                <Price data-testid="cart-item-price">
                    {product.storage.price} EUR
                </Price>
                <Spacer />
                <RemoveButton
                    aria-label={`Remove ${product.name} from cart`}
                    onClick={() => removeFromCart(product)}
                >
                    Delete
                </RemoveButton>
            </Info>
        </ItemContainer>
    );
};

export default CartItem;
