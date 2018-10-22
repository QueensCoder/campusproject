// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';

import students from './students';
import campus from './campus';

const rootReducer = combineReducers({ students, campus });

export * from './students';
export * from './campus';

export default rootReducer;
