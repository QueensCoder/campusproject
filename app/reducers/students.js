import axios from 'axios';

//action types
const GET_ONE_STUDENT = 'GET_ONE_STUDENT';
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';

//action creators
export function getStudent(student) {
  return { type: GET_ONE_STUDENT, student };
}

export function getAllStudents(students) {
  return { type: GET_ALL_STUDENTS, students };
}

//thunk creators

export function fetchAllStudents() {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.get('/api/student');
      dispatch(getAllStudents(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_ONE_STUDENT:
      return [...state, action.student]; //adds student to students
    case GET_ALL_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
