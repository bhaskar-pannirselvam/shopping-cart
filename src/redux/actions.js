import Item from '../component/Item';
import * as actionTypes from './action-types';

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item,
    };
}

export const removeFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item,
    };
}

export const adjustQty = (item) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: item
    };
}


