import axios from 'axios';

//action types
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';
const GET_ALL_CAMPUS = 'GET_ALL_CAMPUS';
//action creatorscampus
export function getCampus(campus) {
  return { type: GET_ONE_CAMPUS, campus };
}

export function getAllCampus(campus) {
  return { type: GET_ALL_CAMPUS, campus };
}

//thunk creators

export function fetchAllCampus() {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.get('/api/campus');
      dispatch(getAllCampus(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_ONE_CAMPUS:
      return [...state, action.campus]; //adds CAMPUS to CAMPUSs
    case GET_ALL_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
