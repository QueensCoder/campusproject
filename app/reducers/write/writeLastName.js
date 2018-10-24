const WRITE_LAST_NAME = 'WRITE_LAST_NAME';

export const writeLastName = name => {
  return { type: WRITE_LAST_NAME, name };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_LAST_NAME:
      return action.name;
    default:
      return state;
  }
}
