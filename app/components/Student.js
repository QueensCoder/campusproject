import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Student = props => {
  const { students, campus } = props;
  return (
    <div>
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

export default connect(mapStateToProps)(Student);
