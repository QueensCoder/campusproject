import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleStudent = props => {
  const { student, campus, students } = props;
  const id = Number(props.match.params.id);
  // if (students && !student)
  //   return (
  //     <div>
  //       <h1>Student Does Not Exist</h1>
  //     </div>
  //   );

  return student && campus ? (
    <div>
      <h1>Name: {student.fullName}</h1>
      <img src={student.imageURL} />
      <h4>GPA :{student.gpa}</h4>
      <h6>Email: {student.email}</h6>
      {student.campusId ? (
        <Link to={`/campus/${student.campusId}`}>
          {campus.find(camp => camp.id === student.campusId).name}
        </Link>
      ) : (
        <h6>No campus</h6>
      )}
      <div>
        <div>
          <Link to={`/updatestudent/${student.id}`}>Update a Student</Link>
        </div>
        <hr />
        <Link to="/students">All Students</Link>
      </div>
    </div>
  ) : !students.includes(student) ? (
    <div>
      <h1>
        Loading: If record does not load after 2 seconds it does not exist
      </h1>
    </div>
  ) : (
    <h1>fail</h1>
  );
};

//if student has a campusId then show a link to the campus
//otherwise show that student does not have a campus and do
//not show link
const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    student: state.students.find(student => student.id === id),
    campus: state.campus,
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleStudent);
