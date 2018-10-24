import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleCampus = props => {
  const { students, campus, campusId } = props;
  //if students and campus are mapped to props then show html
  //else show loading
  return students && campus ? (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageURL} />
      <p>{campus.description}</p>
      <h5>{campus.address}</h5>
      <hr />
      <ul>
        {students.length ? (
          students.map(student => (
            <li key={student.id}>
              <img src={student.imageURL} />
              <div>
                <Link to={`/students/${student.id}`}>{student.fullName}</Link>
              </div>
              <hr />
            </li>
          ))
        ) : (
          <div> No Students for this Campus</div>
        )}
      </ul>
      <Link to="/campus">All Campuses</Link>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id); //make sure to change data to int
  //students are filtered based on id
  return {
    students: state.students.filter(student => student.campusId === id),
    campus: state.campus.find(item => item.id === id),
    campusId: id
  };
  //find returns only the campus we want thats why we use find instead of filter
};

export default connect(mapStateToProps)(SingleCampus);
