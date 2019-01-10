const SELECT_STUDENT = 'CHANGE_STUDENT';

export const selectStudent = student => {
  return {
    type: SELECT_STUDENT,
    student
  };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return action.student;
    default:
      return state;
  }
}
