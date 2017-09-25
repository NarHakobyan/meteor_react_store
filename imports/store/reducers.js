import { combineReducers } from 'redux';

const storeReducer = (store, action) => {
    return store;
};

export default combineReducers({
    store: storeReducer,
});