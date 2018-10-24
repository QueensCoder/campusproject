// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';

import students from './students';
import campus from './campus';
import campusName from './write/writeCampusName';
import address from './write/writeCampAddress';
import email from './write/writeEmail';
import firstName from './write/writeFirstName';
import lastName from './write/writeLastName';

const rootReducer = combineReducers({
  students,
  campus,
  campusName,
  address,
  firstName,
  lastName,
  email
});

export * from './students';
export * from './campus';
export * from './write/writeCampusName';
export * from './write/writeCampAddress';
export * from './write/writeEmail';
export * from './write/writeFirstName';
export * from './write/writeLastName';

export default rootReducer;
