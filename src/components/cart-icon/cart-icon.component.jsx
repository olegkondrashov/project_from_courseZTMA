import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    // const totalQuantity = cartItems.reduce(
    //     (acc, item) => acc + item.quantity, 0
    // );

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;