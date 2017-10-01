import { LOADING_END, LOADING_START } from '../constants';

export const showLoading = () => {
    return (dispatch) => {
        dispatch({
            type: LOADING_START,
        });
    };
};
export const hideLoading = () => {
    return (dispatch) => {
        dispatch({
            type: LOADING_END,
        });
    };
};