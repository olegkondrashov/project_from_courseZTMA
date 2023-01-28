import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector'

import { addItemToCart, clearItemFromCart, deleteItemFromCart} from '../../store/cart/cart.action';
import { Arrow, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, SpanItem, Value } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(deleteItemFromCart(cartItems, cartItem));

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