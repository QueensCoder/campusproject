const { STRING, TEXT, DECIMAL, VIRTUAL } = require('sequelize');
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
  },
  fullName: {
    type: VIRTUAL,
    get() {
      return (
        this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
      );
    }
  }
});

//full name is a virtual that returns the students full name
//without taking up room in a db.

Student.beforeCreate(student => {
  student.firstName = capitalize(student.firstName);
  student.lastName = capitalize(student.lastName);
});

function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

//hook takes students first name and last name and makes sure
//the first letter is capital before an entry is created in db

module.exports = Student;
