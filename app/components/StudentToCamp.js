import React from 'react';
import { connect } from 'react-redux';
import { selectStudent, selectCamp, putStudent } from '../reducers';

const AddStudentToCamp = props => {
  const {
    students,
    campus,
    onChange,
    onSubmit,
    handleChange,
    selectStudent,
    selectCampus
  } = props;
  //const stud = students.find(stu => stu.id === Number(selectStudent));
  // const update = { ...stud, campusId: Number(selectCampus) };
  return (
    <div>
      {students && campus ? (
        <form onSubmit={evt => onSubmit(evt, selectStudent, selectCampus)}>
          <select onChange={onChange}>
            <option>Select a student</option>
            {students.map(stud => {
              return (
                <option key={stud.id} value={stud.id}>
                  {stud.fullName}
                </option>
              );
            })}
          </select>
          <select onChange={handleChange}>
            <option>Select a campus</option>
            {campus.map(camp => {
              return (
                <option key={camp.id} value={camp.id}>
                  {camp.name}
                </option>
              );
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students,
    campus: state.campus,
    selectStudent: state.selectStudent,
    selectCampus: state.selectCampus
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: evt => {
      console.log(evt.target.value);
      dispatch(selectStudent(evt.target.value));
    },

    handleChange: evt => {
      console.log(evt.target.value);
      dispatch(selectCamp(evt.target.value));
    },

    onSubmit: (evt, sId, cId) => {
      evt.preventDefault();
      //console.log(sId, cId, 'here');
      const id = Number(sId);
      const campusId = Number(cId);
      //console.log(id, campusId);
      // if (!sId || !cId) {
      //   alert('Please select a student and campus before submitting');
      // } else {
      dispatch(putStudent({ id, campusId }, ownProps.history));
      dispatch(selectStudent(''));
      dispatch(selectCamp(''));
      // }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentToCamp);
