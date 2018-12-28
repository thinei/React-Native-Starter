import * as Types from './LoginTypes';

export const changeText = ({ prop, value }) => {
    return {
        type: Types.TEXT_CHANGED,
        payload: { prop, value }
    };
};

export const loginUser = ({ email, password }) => {
    return {
        type: Types.LOGIN_USER,
        payload: { email, password }
    }
}

export const loginUserSuccess = () => {
    return {
        type: Types.LOGIN_USER_SUCCESS
    }
}
export const isLoggedIn = () => {
    return {
        type: Types.LOGIN_USER_CHECK
    }
}
