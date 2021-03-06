import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { fetchAllStudents, fetchAllCampus } from '../reducers';
import store from '../store';
import {
  Student,
  Campus,
  SingleCampus,
  Home,
  SingleStudent,
  CampusForm,
  StudentForm,
  EntryExists,
  UpdateCampus,
  UpdateStudent,
  Error,
  Testing
} from './';

class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchAllCampus());
    store.dispatch(fetchAllStudents());
    //fetch all students and campus upon component mounting
  }
  render() {
    return (
      <div>
        <nav>
          Welcome! <Link to="/students">Students</Link>{' '}
          <Link to="/campus">Campus</Link>
          <Link to="/">Home</Link>
          <Link to="/testing">Testing</Link>
          {/* <Link to="/testing">testing</Link> */}
        </nav>
        <main>
          <Switch>
            <Route exact path="/students" component={Student} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route exact path="/campus" component={Campus} />
            <Route path="/campus/:id" component={SingleCampus} />
            <Route exact path="/" component={Home} />
            <Route path="/addcampus" component={CampusForm} />
            <Route path="/addstudent" component={StudentForm} />
            <Route path="/entryexists" component={EntryExists} />
            <Route path="/updatecampus/:id" component={UpdateCampus} />
            <Route path="/updatestudent/:id" component={UpdateStudent} />
            <Route exact path="/testing" component={Testing} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    );
  }
}

//error is default route if other proper routes are not matched
//sort of hacky

//use exact path to make sure you do not render all campus when looking
//for single campus
export default Root;
