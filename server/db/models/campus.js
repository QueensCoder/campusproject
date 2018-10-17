const { STRING, TEXT } = require('sequelize');
const db = require('../database');
//take data types off of sequelize
//require in database in order to define models

const Campus = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  },

  imageURL: {
    type: TEXT,
    defaultValue: './images/default.jpeg'
  },

  description: {
    type: TEXT
  },

  address: {
    type: TEXT,
    allowNull: false
  }
});

//define campus with name imageURL and description using Sequelize types

module.exports = Campus;
