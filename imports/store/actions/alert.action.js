import { SHOW_ALERT, RESET_ALERT } from '../constants';

export const showAlert = (configs) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: configs,
        });
    };
};
export const showConfirmAlert = (configs) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {...configs, type: 'danger', showCancel: true},
        });
    };
};
export const confirmAlert = () => {
    return (dispatch, getState) => {
        const { alert } = getState();
        const returnData = alert.onConfirm();
        dispatch({
            type: RESET_ALERT,
        });
        return returnData;
    };
};


export const cancelAlert = () => {
    return (dispatch, getState) => {
        const { alert } = getState();
        const returnData = alert.onCancel();
        dispatch({
            type: RESET_ALERT,
        });
        return returnData;
    };
};