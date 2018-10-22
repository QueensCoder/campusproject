import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { fetchAllStudents, fetchAllCampus } from '../reducers';
import store from '../store';
import { Student, Campus, SingleCampus, Home } from './';
import SingleStudent from './SingleStudent';

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
        </nav>
        <main>
          <Switch>
            <Route exact path="/students" component={Student} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route exact path="/campus" component={Campus} />
            <Route path="/campus/:id" component={SingleCampus} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

//use exact path to make sure you do not render all campus when looking
//for single campus
export default Root;
