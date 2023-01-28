import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const deleteCartItem = (cartItems, productToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToDelete.id );
    }

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToDelete.id 
            ? {...cartItem, quantity: cartItem.quantity - 1} 
            : cartItem
        );
    }
}

const removeFromCheckout = (cartItems, productToRemove) => cartItems.filter(cartItem => cartItem.id !== productToRemove.id );

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean
);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const deleteItemFromCart = (cartItems, cartProductToDelete) => {
    const newCartItems = deleteCartItem(cartItems, cartProductToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeFromCheckout(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}


