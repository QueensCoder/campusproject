const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';

export const updateFirstName = name => {
  return { type: UPDATE_FIRSTNAME, name };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return action.name;
    default:
      return state;
  }
}
