import {
    STUDENT_LIST_REQUESTED,
    STUDENT_LIST_SUCCESSED,
    STUDENT_LIST_FAILED
} from './StudentTypes';

import { put, call, takeLatest } from 'redux-saga/effects';
import rsf from '../../sagas/firebaseSaga';
import firebase from 'firebase';

function* fetchStudentList() {
    const user = firebase.auth().currentUser;
    const studentData = yield call(rsf.database.read, `users/${user.uid}/students`);
    if (studentData != null) {
        const studentArr = Object.keys(studentData).map(i => studentData[i]);
        try {
            yield put({ type: STUDENT_LIST_SUCCESSED, payload: studentArr })
        } catch (error) {
            yield put({ STUDENT_LIST_FAILED })
        }
    }
}

export function* watchFetchStudentList() {
    yield takeLatest(STUDENT_LIST_REQUESTED, fetchStudentList);
}