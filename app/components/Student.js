import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../reducers';

const Student = props => {
  const { students, campus, handleClick } = props;
  return (
    <div>
      <Link to="/addstudent">Add Student</Link>
      <ul>
        {students.map(student => {
          const camp = campus.find(item => item.id === student.campusId);
          return (
            <li key={student.id}>
              <img src={student.imageURL} alt="" />
              <Link to={`/students/${student.id}`}>{student.fullName}</Link>
              <h5>{student.email}</h5>
              {camp ? (
                <Link to={`/campus/${student.campusId}`}>
                  Campus: {camp.name}
                </Link>
              ) : (
                <h6> No Campus</h6>
              )}
              <div>
                <button onClick={() => handleClick(student.id)}>X</button>
              </div>

              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campus: state.campus
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: function(id) {
      console.log('here is the student id', id);
      dispatch(deleteStudent(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
