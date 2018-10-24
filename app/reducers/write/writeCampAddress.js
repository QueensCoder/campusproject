const WRITE_CAMPUS_ADDRESS = 'WRITE_CAMPUS_ADDRESS';

export const writeAddress = address => {
  return { type: WRITE_CAMPUS_ADDRESS, address };
};

//export default cannot use arrow functions in the same line
export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS_ADDRESS:
      return action.address;
    default:
      return state;
  }
}
