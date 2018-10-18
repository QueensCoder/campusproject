const Student = require('../models/students');

//add todos to student model
//keeps code more modular
//get and get all did not need to be async to work
Student.getAll = function() {
  return Student.findAll();
};

Student.getOne = function(id) {
  return Student.findById(id);
};

Student.postOrExist = async function(studentInfo) {
  const newInfo = await Student.findOrCreate({ where: studentInfo });
  const instance = newInfo[0];
  const created = newInfo[1];
  //need to fix id portion for find or create
  return created ? instance : 'Student already exists!';
};

Student.updateInfo = async function(studentInfo, id) {
  try {
    const updatedStudent = await Student.update(studentInfo, {
      where: { id },
      returning: true,
      plain: true
    });
    //returning allows for result to be returned
    //and plain allows you to access returned infomatio as obj
    return updatedStudent[1].dataValues;
    //find updated obj on index 1 at datavalues
  } catch (err) {
    console.log(err);
  }
};

Student.remove = async function(id) {
  try {
    const remove = await Student.destroy({
      where: {
        id
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = Student;
