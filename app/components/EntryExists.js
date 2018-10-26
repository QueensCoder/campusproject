import React from 'react';
import { Link } from 'react-router-dom';

//for find or create if entry is found then return this page
//to show user that entry exists
const EntryExists = () => {
  return (
    <div>
      <h1>Entry Already Exists!</h1>
      <div>
        <Link to="/students">Students</Link>
      </div>
      <div>
        <Link to="/campus">Campuses</Link>
      </div>
    </div>
  );
};

export default EntryExists;
