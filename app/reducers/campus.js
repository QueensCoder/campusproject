import axios from 'axios';

//action types
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';
//get one is for when you post a campus it then gets that record
//to campus array
const GET_ALL_CAMPUS = 'GET_ALL_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
//action creatorscampus
export function getCampus(campus) {
  return { type: GET_ONE_CAMPUS, campus };
}

export function getAllCampus(campus) {
  return { type: GET_ALL_CAMPUS, campus };
}

export function removeCampus(deleteId) {
  return { type: REMOVE_CAMPUS, deleteId };
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

export function postCampus(campusInfo, history) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.post('/api/campus', campusInfo);
      if (data === 'Campus already exists!') {
        history.push('/entryexists');
        return;
      }
      dispatch(getCampus(data));
      history.push(`/campus/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteCampus(deleteId) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.delete(`/api/campus/${deleteId}`);
      dispatch(removeCampus(deleteId));
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
    case REMOVE_CAMPUS:
      return state.filter(campus => campus.id !== action.deleteId);
    default:
      return state;
  }
}
