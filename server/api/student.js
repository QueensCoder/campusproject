const router = require('express').Router();
//get get all students
const Student = require('../db/todos/student');

router.get('/', async (req, res) => {
  try {
    // const resp = await Student.getAll();
    //await async call and send all students from todos in DB folder
    res.send(await Student.getAll());
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.send(await Student.getOne(req.params.id));
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).send(await Student.postOrExist(req.body));
    //when using postman make sure to send raw json obj for reqbody
  } catch (err) {
    console.log(err);
  }
});

//need async on post and update in both routes and todos
router.put('/:id', async (req, res) => {
  try {
    res.send(await Student.updateInfo(req.body, req.params.id));
  } catch (err) {
    console.log(err);
  }
});

//todo remove did not let you send returned result from operation
router.delete('/:id', async (req, res) => {
  try {
    res.status(204).send(await Student.remove(req.params.id));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
