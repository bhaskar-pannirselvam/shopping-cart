import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { loadState } from './localStorage';

const persistedState = loadState();

const cartItems = [];

const initialStore = {
    cart: cartItems,
    persistedState
}

const store = createStore(rootReducer, persistedState, composeWithDevTools());

export default store;