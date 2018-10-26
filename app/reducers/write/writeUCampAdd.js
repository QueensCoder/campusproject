const UPDATE_CAMP_ADDRESS = 'UPDATE_CAMP_ADDRESS';

export const writeUpdateAddress = address => {
  return { type: UPDATE_CAMP_ADDRESS, address };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_CAMP_ADDRESS:
      return action.address;
    default:
      return state;
  }
}
