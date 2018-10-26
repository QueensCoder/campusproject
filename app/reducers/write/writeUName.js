const UPDATE_CAMP_NAME = 'UPDATE_CAMP_NAME';

export const writeCampName = name => {
  return { type: UPDATE_CAMP_NAME, name };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_CAMP_NAME:
      return action.name;
    default:
      return state;
  }
}
