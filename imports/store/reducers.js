import { combineReducers } from 'redux';

const storeReduser = (store, action) => {
    return store;
};

export default combineReducers({
    store: storeReduser,
});