import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    deleteCartItem: () => {},
    removeFromCheckout: () => {},
})

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}


const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            ...payload
        }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}


export const CartProvider = ({children}) => {
    
    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0)

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)


        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS, 
                {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}
            )
        );
    }

    const setIsCartOpen = (state) => {
        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_IS_CART_OPEN, 
                state
            )
        )
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const deleteItemFromCart = (cartProductToDelete) => {
        const newCartItems = deleteCartItem(cartItems, cartProductToDelete);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (productToRemove) => {
        const newCartItems = removeFromCheckout(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        deleteItemFromCart, 
        clearItemFromCart, 
        cartItems, 
        cartCount, 
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}