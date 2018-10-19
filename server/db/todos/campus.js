const Campus = require('../models/campus');
const Student = require('../models/students');

Campus.getAll = function() {
  return Campus.findAll();
};

Campus.getOne = function(id) {
  return Campus.findById(id);
};

Campus.postOrExist = async function(campusInfo) {
  const newInfo = await Campus.findOrCreate({ where: campusInfo });
  return newInfo[0]; //this is the created instance need to fix find or create
};

Campus.updateInfo = async function(campusInfo, id) {
  try {
    const updatedCampus = await Campus.update(campusInfo, {
      where: { id },
      returning: true,
      plain: true
    });
    //returning allows for result to be returned
    //and plain allows you to access returned infomatio as obj
    return updatedCampus[1].dataValues;
    //find updated obj on index 1 at datavalues
  } catch (err) {
    console.log(err);
  }
};

Campus.remove = async function(id) {
  try {
    const remove = await Campus.destroy({
      where: {
        id
      }
    });
  } catch (err) {
    console.log(err);
  }
};

Campus.getStudents = function(id) {
  return Campus.findById(id, { include: [{ model: Student }] });
};

module.exports = Campus;
