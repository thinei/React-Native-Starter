import { delay } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { watchLoginUser } from '../modules/login/LoginSaga';
import { watchFetchStudentList } from '../modules/student/StudentSaga';
import { watchAddStudent, watchUpdateStudent, watchDeleteStudent } from '../modules/addStudent/AddStudentSaga';

export default function* rootSaga() {
    yield [
        fork(watchLoginUser),
        fork(watchFetchStudentList),
        fork(watchAddStudent),
        fork(watchUpdateStudent),
        fork(watchDeleteStudent)
    ]
}