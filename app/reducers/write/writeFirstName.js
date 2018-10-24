const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME';

export const writeFirstName = name => {
  return { type: WRITE_FIRST_NAME, name };
};

//export default cannot use arrow functions in the same line
export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_FIRST_NAME:
      return action.name;
    default:
      return state;
  }
}
