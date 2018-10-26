const UPDATE_EMAIL = 'UPDATE_EMAIL';

export const updatEmail = email => {
  return { type: UPDATE_EMAIL, email };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return action.email;
    default:
      return state;
  }
}
