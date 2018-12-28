import * as Types from './StudentTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case Types.STUDENT_LIST_SUCCESSED:
            return action.payload;

        default:
            return state;
    }
}