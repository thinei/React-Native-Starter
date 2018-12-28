import * as Types from './LoginTypes';

INITIAL_STATE = { email: '', password: '', error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.TEXT_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case Types.LOGIN_USER_SUCCESS:
            return { ...state, INITIAL_STATE };
        case Types.loadingLOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', loading: false, password: '' };
        case Types.LOGIN_USER_LOADING:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
}