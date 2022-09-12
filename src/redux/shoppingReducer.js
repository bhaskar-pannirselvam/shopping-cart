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
            const inCart = state.cart.find(it => it.id === item.id ? true : false);

            // console.log(item);
            //console.log(inCart);

            return {
                ...state,
                cart: inCart ?
                    state.cart.map((item) =>
                        item.id === action.payload.id ?
                            { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }],
                totQty: state.totQty + 1,

            };

        case actionTypes.REMOVE_FROM_CART:
            return {

            }
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURR_ITEM:
            return {}
        default:
            return state;

    }

};

export default shopReducer;