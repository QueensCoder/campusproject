import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampus } from '../reducers';

const Campus = props => {
  const { campus, handleClick } = props;
  return (
    <div>
      <ul>
        {campus.map(campus => {
          return (
            <li key={campus.id}>
              <img src={campus.imageURL} alt="" />
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
              <h5>{campus.description}</h5>
              <h5>{campus.address}</h5>
              <div>
                <button onClick={() => handleClick(campus.id)}>X</button>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
      <hr />
      <Link to="/addcampus">Add a Campus</Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campus
  };
};

//handleclick takes the id from campus dispatches deletecampus with it
//delete campus then takes the id and uses it for an axios.delete request
//which deletes the corresponding record
const mapDispatchToProps = dispatch => {
  return {
    handleClick: function(deleteId) {
      dispatch(deleteCampus(deleteId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
