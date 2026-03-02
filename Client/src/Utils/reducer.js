import { Type } from './action.type';

export const initialState = {
    cart: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        // In your reducer.js
        case 'UPDATE_QTY':
            const { id, qty } = action;
            const existingItem = state.cart.find((item) => item.id === id);
            // Remove all instances of this item
            const filteredCart = state.cart.filter((item) => item.id !== id);
            // Add back the correct number of instances
            const newItems = Array(qty).fill(existingItem);
            return {
                ...state,
                cart: [...filteredCart, ...newItems],
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.id),
            };
        default:
            return state;
    }
};