import { CLOSE_ALERT, RESET_ALERT, SHOW_ALERT } from '../constants';

const defaultStore = {
    show: false,
    type: 'default',
    confirmBtnText: 'OK',
    cancelBtnText: 'Cancel',
    confirmBtnBsStyle: 'primary',
    cancelBtnBsStyle: 'link',
    title: '',
    text: 'Test',
    onConfirm: () => {},
    onCancel: () => {},
};

const alertReducer = (store = defaultStore, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...store, ...action.payload, show: true };
        case CLOSE_ALERT:
            return { show: false };
        case RESET_ALERT:
            return { ...defaultStore };
        default:
            return store;
    }
};

export default alertReducer;