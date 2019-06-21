import React from 'react';
import { connect } from 'react-redux';
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  putStudent
} from '../reducers';

const UpdateStudent = props => {
  const {
    id,
    student,
    updateEmail,
    updateFirst,
    updateLast,
    onFNameChange,
    onLastNameChange,
    onEmailChange,
    handleSubmit
  } = props;

  return student ? (
    <div>
      <h1>{student.firstName}</h1>
      <h1>{student.lastName}</h1>
      <h2> EMAIL: {student.email}</h2>
      <img src={student.imageURL} />
      <h4>GPA {student.gpa}</h4>
      <div>
        <form
          onSubmit={evt =>
            handleSubmit(evt, updateEmail, updateFirst, updateLast, id)
          }
        >
          <div>
            <label htmlFor="firstName">Update Students First Name</label>
            <input
              value={updateFirst}
              type="text"
              name="firstName"
              onChange={onFNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Update Students Last Name</label>
            <input
              value={updateLast}
              type="text"
              name="lastName"
              onChange={onLastNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Update Students Email</label>
            <input
              value={updateEmail}
              type="email"
              name="email"
              onChange={onEmailChange}
              required
            />
          </div>
          <div>
            <button type="submit">Update Student : {student.fullName}</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    student: state.students.find(student => student.id === id),
    id,
    updateEmail: state.updateEmail,
    updateFirst: state.updateFirst,
    updateLast: state.updateLast
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFNameChange: function(evt) {
      dispatch(updateFirstName(evt.target.value));
    },
    onLastNameChange: function(evt) {
      dispatch(updateLastName(evt.target.value));
    },
    onEmailChange: function(evt) {
      dispatch(updateEmail(evt.target.value));
    },
    handleSubmit: function(evt, email, firstName, lastName, id) {
      //handle Submit takes email firstname, lastname and id
      //email fname and lastname are updated
      //id is used to make put request at correct route
      //see put Student
      evt.preventDefault();
      dispatch(
        putStudent({ email, firstName, lastName, id }, ownProps.history)
      );
      //put student takes object that contains all of aforementioned info
      //and takes ownProps.history to change view to single studentview
      //after the student has been updated
      dispatch(updateFirstName(''));
      dispatch(updateLastName(''));
      dispatch(updateEmail(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStudent);
