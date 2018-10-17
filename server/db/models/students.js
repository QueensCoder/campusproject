const { STRING, TEXT, INTEGER, DECIMAL } = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
  firstName: {
    type: STRING,
    allowNull: false
  },

  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: TEXT,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  imageURL: {
    type: TEXT,
    defaultValue: './images/user.jpeg'
  },
  gpa: {
    type: DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;
