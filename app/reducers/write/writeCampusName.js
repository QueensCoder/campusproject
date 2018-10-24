const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';

export const writeCampus = name => {
  return { type: WRITE_CAMPUS_NAME, name };
};

//export default cannot use arrow functions in the same line
export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      return action.name;
    default:
      return state;
  }
}
