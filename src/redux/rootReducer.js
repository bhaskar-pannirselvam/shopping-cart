import { combineReducers } from 'redux';
import shopReducer from './shoppingReducer';


const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;