import React from 'react';
import { connect } from 'react-redux';
import { putCampus, writeCampName, writeUpdateAddress } from '../reducers';

const UpdateCampus = props => {
  const {
    campus,
    campusId,
    nameChange,
    addressChange,
    writeCampAdd,
    writeCampName,
    handleSubmit
  } = props;

  return campus ? (
    <div>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <h3>{campus.description}</h3>
      <img src={campus.imageURL} />
      <div>
        <form
          onSubmit={evt =>
            handleSubmit(evt, writeCampName, writeCampAdd, campusId)
          }
        >
          <div>
            <label htmlFor="campname">New Campus Name</label>
            <input
              type="text"
              name="campname"
              value={writeCampName}
              onChange={nameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="campaddress">New Campus Addres</label>
            <input
              type="text"
              name="campaddress"
              value={writeCampAdd}
              onChange={addressChange}
              required
            />
          </div>
          <button type="submit">Update Campus: {campus.name}</button>
        </form>
      </div>
    </div>
  ) : (
    <h1>not mapped</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    campus: state.campus.find(camp => camp.id === id),
    campusId: id,
    writeCampName: state.writeCampName,
    writeCampAdd: state.writeCampAdd
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nameChange: function(evt) {
      dispatch(writeCampName(evt.target.value));
    },
    addressChange: function(evt) {
      dispatch(writeUpdateAddress(evt.target.value));
    },
    handleSubmit: function(evt, name, address, id) {
      evt.preventDefault();
      //pass name address and id into putCampus which makes an axios
      //request using campusId for params and name & address for reqbody
      dispatch(putCampus({ name, address, id }, ownProps.history));
      dispatch(writeCampName(''));
      dispatch(writeUpdateAddress(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCampus);
