import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleStudent = props => {
  const { student, campus } = props;

  return student && campus ? (
    <div>
      <h1>Name: {student.fullName}</h1>
      <img src={student.imageURL} />
      <h4>GPA :{student.gpa}</h4>
      <h6>Email: {student.email}</h6>
      <Link to={`/campus/${student.campusId}`}>
        {campus.find(camp => camp.id === student.campusId).name}
      </Link>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    student: state.students.find(student => student.id === id),
    campus: state.campus
  };
};

export default connect(mapStateToProps)(SingleStudent);
