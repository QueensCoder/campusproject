'use strict';

const db = require('./database');
const Campus = require('./models/campus');
const Student = require('./models/students');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

Student.belongsTo(Campus);
Campus.hasMany(Student);
//students belongs to one campus and campuses can have many students

module.exports = {
  // Include your models in this exports object as well!
  db,
  Campus,
  Student
};

//in order to allow your schema to be synced to db you must first define
//schema then import schema into central  models/schema export
//from this export you sync this to the db and then listen on a port
