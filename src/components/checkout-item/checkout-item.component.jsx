import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context'
import { Arrow, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, SpanItem, Value } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, deleteItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => deleteItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer as='div'>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <SpanItem>{name}</SpanItem>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <SpanItem>{price}</SpanItem>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;