import { addItemToCart } from './cart.util'

import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../constants'
const initialState = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,payload)
            }
        default:
            return state
    }
}

export default cartReducer;