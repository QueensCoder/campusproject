import { combineReducers } from 'redux';

//get
import students from './students';
import campus from './campus';

//post
import campusName from './write/writeCampusName';
import address from './write/writeCampAddress';
import email from './write/writeEmail';
import firstName from './write/writeFirstName';
import lastName from './write/writeLastName';

//put
import updateFirst from './write/updateFName';
import updateLast from './write/updateFName';
import updateEmail from './write/updateEmail';
import writeCampName from './write/writeUCampAdd';
import writeCampAdd from './write/writeUName';

const rootReducer = combineReducers({
  students,
  campus,
  campusName,
  address,
  firstName,
  lastName,
  email,
  updateEmail,
  updateFirst,
  updateLast,
  writeCampAdd,
  writeCampName
});

//for all exports make sure that the action creators do not share
//the same names or else it will cause an error

//get
export * from './students';
export * from './campus';
//post
export * from './write/writeCampusName';
export * from './write/writeCampAddress';
export * from './write/writeEmail';
export * from './write/writeFirstName';
export * from './write/writeLastName';

//update
//student
export * from './write/updateEmail';
export * from './write/updateFName';
export * from './write/updateLName';

//campus

export * from './write/writeUCampAdd';
export * from './write/writeUName';

export default rootReducer;
