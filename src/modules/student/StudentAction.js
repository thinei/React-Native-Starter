import {
    STUDENT_LIST_REQUESTED,
    STUDENT_LIST_SUCCESSED
} from './StudentTypes';

export const fetchStudentList = () => {
    return {
        type: STUDENT_LIST_REQUESTED
    }
}
