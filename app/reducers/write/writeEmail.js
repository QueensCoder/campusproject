const WRITE_EMAIL = 'WRITE_EMAIL';

export const writeEmail = email => {
  return { type: WRITE_EMAIL, email };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_EMAIL:
      return action.email;
    default:
      return state;
  }
}
