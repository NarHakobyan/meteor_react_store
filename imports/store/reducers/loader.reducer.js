import { LOADING_END, LOADING_START } from '../constants';

const defaultStore = {
    loading: false,
};

const loaderReducer = (store = defaultStore, action) => {
    switch (action.type) {
        case LOADING_START:
            return { loading: true };
        case LOADING_END:
            return { loading: false };
        default:
            return store;
    }
};

export default loaderReducer;