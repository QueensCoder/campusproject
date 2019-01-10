const SELECT_CAMPUS = 'SELECT_CAMPUS';

export const selectCamp = campus => {
  return {
    type: SELECT_CAMPUS,
    campus
  };
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case SELECT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
