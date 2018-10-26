const UPDATE_LASTNAME = 'UPDATE_LASTNAME';

export const updateLastName = name => {
  return { type: UPDATE_LASTNAME, name };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_LASTNAME:
      return action.name;
    default:
      return state;
  }
}
