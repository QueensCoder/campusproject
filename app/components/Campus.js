import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Campus = props => {
  const { campus } = props;
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campus
  };
};

export default connect(mapStateToProps)(Campus);
