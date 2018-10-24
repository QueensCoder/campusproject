import React from 'react';
import { connect } from 'react-redux';
import {
  writeEmail,
  writeFirstName,
  writeLastName,
  postStudent
} from '../reducers';

const StudentForm = props => {
  const {
    firstName,
    lastName,
    email,
    firstChange,
    lastChange,
    emailChange,
    handleSubmit
  } = props;
  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={evt => handleSubmit(evt, firstName, lastName, email)}>
        <div>
          <label htmlFor="firstName">Student's First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={firstChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Student's Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={lastChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Student's Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstChange: function(evt) {
      dispatch(writeFirstName(evt.target.value));
    },
    lastChange: function(evt) {
      dispatch(writeLastName(evt.target.value));
    },
    emailChange: function(evt) {
      dispatch(writeEmail(evt.target.value));
    },
    handleSubmit: function(evt, firstName, lastName, email) {
      evt.preventDefault();
      const studentInfo = { firstName, lastName, email };
      console.log(studentInfo);
      //after create the user is redirected the entry view
      dispatch(postStudent(studentInfo, ownProps.history));
      dispatch(writeFirstName(''));
      dispatch(writeLastName(''));
      dispatch(writeEmail(''));
    }
  };
};

//always make sure mapstate and mapdispatch is connected or component will
//not have proper functionality
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
