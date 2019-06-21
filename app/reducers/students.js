import axios from 'axios';

//action types
const GET_ONE_STUDENT = 'GET_ONE_STUDENT';
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//action creators
export function getStudent(student) {
  return { type: GET_ONE_STUDENT, student };
}

export function getAllStudents(students) {
  return { type: GET_ALL_STUDENTS, students };
}

export function removeStudent(deleteId) {
  return { type: REMOVE_STUDENT, deleteId };
}

export function updateStudent(student) {
  return { type: UPDATE_STUDENT, student };
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

export function postStudent(studentInfo, history) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.post('/api/student', studentInfo);
      if (data === 'Student already exists!') {
        history.push('/entryexists');
        return;
      }
      dispatch(getStudent(data));
      history.push(`/students/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteStudent(deleteId) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.delete(`/api/student/${deleteId}`);
      dispatch(removeStudent(deleteId));
      //wait for record to be deleted then dispatch a change to the store
      //removing the record see reducer
    } catch (err) {
      console.log(err);
    }
  };
}

export function putStudent(student, history) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.put(`/api/student/${student.id}`, student);
      dispatch(updateStudent(data));
      console.log(data, 'data');
      console.log(history, 'history');
      history.push(`/students/${data.id}`);
      //error with history
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
    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.deleteId);
    //filters out 1 student that is to be deleted based on Id
    //needs to be done here because get/delete/post all effect this array

    case UPDATE_STUDENT:
      const nextState = state.filter(
        student => student.id !== action.student.id
      );
      return [...nextState, action.student];

    default:
      return state;
  }
}
