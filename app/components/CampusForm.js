import React from 'react';
import { connect } from 'react-redux';
import { writeAddress, writeCampus, postCampus } from '../reducers';

const CampusForm = props => {
  const {
    campusName,
    address,
    handleSubmit,
    onAddressChange,
    onNameChange
  } = props;
  return (
    <div>
      <h1>Add Campus</h1>
      <form onSubmit={evt => handleSubmit(evt, campusName, address)}>
        <div>
          <label htmlFor="campusName">Campus Name</label>
          <input
            type="text"
            name="campusName"
            value={campusName}
            onChange={onNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onAddressChange}
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
    campusName: state.campusName,
    address: state.address
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNameChange: function(evt) {
      dispatch(writeCampus(evt.target.value));
    },
    onAddressChange: function(evt) {
      dispatch(writeAddress(evt.target.value));
    },
    handleSubmit: function(evt, campusName, address) {
      evt.preventDefault();
      //model requires name not campusName
      const campusInfo = { name: campusName, address };
      //after create the user is redirected the entry view
      dispatch(postCampus(campusInfo, ownProps.history));
      dispatch(writeAddress(''));
      dispatch(writeCampus(''));
    }
  };
};

//always make sure mapstate and mapdispatch is connected or component will
//not have proper functionality
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusForm);
