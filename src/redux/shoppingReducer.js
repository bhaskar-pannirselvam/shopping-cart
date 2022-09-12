import * as actionTypes from "./action-types";

const INITIAL_STATE = {
    cart: [],
    currentItem: null,
    totQty: 0,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    // console.log('test5');
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            return {
                ...state,
                cart: [...state.cart, { ...item, }],
                totQty: state.totQty + item.minQty,

            };

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                totQty: state.totQty - state.cart.find((it) => it.id === action.payload.id ? true : false).qty,
                cart: state.cart.filter((item) => item.id !== action.payload.id),

            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                totQty: state.totQty - state.cart.find((it) => it.id === action.payload.id ? true : false).qty + action.payload.qty,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item),
            };
        default:
            return state;

    }

};

export default shopReducer;