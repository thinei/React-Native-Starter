import * as Types from './LoginTypes';
import { delay } from "redux-saga";
//saga effect
import { put, select, call, takeLatest } from 'redux-saga/effects';
import rsf from '../../sagas/firebaseSaga';

import NavigationService from '../../navigation/NavigationService';
import { checkLoginUser } from "./LoginSelector";

function* loginUserCheck() {
    const email = yield select(checkLoginUser);
    yield delay(3000);
    if (email && email !== "") {
        try {
            NavigationService.navigate('StudentList', 0);

        } catch (error) {
            console.log(error);
        }

    } else {
        console.log("SOMETHING");
    }
}


function* loginUser(action) {
    const { email, password, loading, error } = action.payload;

    yield put({ type: Types.LOGIN_USER_LOADING, loading });

    try {
        const data = yield call(rsf.auth.signInWithEmailAndPassword, email, password);

        NavigationService.navigate('StudentList', 0);

    } catch (error) {
        yield put({ type: Types.LOGIN_USER_FAIL, error });
    }
}

export function* watchLoginUser() {
    yield takeLatest(Types.LOGIN_USER_CHECK, loginUserCheck);
    yield takeLatest(Types.LOGIN_USER, loginUser);

}