import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length === 0 ? <EmptyMessage>Cart is Empty</EmptyMessage> 
                    :
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                }
            </CartItems>
                <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;