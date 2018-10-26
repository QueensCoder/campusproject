import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UpdateCampus = props => {
  const { campus } = props;
  return (
    <div>
      <ul>
        {campus &&
          campus.map(camp => {
            return <li key={camp.id}>{camp.name}</li>;
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campus: state.campus
  };
};

export default connect(mapStateToProps)(UpdateCampus);
