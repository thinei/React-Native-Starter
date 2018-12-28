import { combineReducers } from 'redux';

import LoginReducer from '../modules/login/LoginReducer';
import StudentReducer from '../modules/student/StudentReducer';
import AddStudentReducer from '../modules/addStudent/AddStudentReducer';

export default combineReducers({
    authReducer: LoginReducer,
    studentList: StudentReducer,
    student: AddStudentReducer
});