import Item from '../component/Item';
import * as actionTypes from './action-types';

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item,
    };
}

// export const removeFromCart = (itemID) => {
//     return {
//         type: actionTypes.REMOVE_FROM_CART,
//         payload: {
//             id: itemId
//         }
//     };
// }

// export const adjustQty = (itemID, value) => {
//     return {
//         type: actionTypes.adjustQty,
//         payload: {
//             id: itemId,
//             qty: value,
//         }
//     };
// }


