const router = require('express').Router();
const Campus = require('../db/todos/campus');

router.get('/', async (req, res) => {
  try {
    res.send(await Campus.getAll());
  } catch (err) {
    console.log(err);
  }
});

// router.get('/:id/students' (req, res) => {

// })

router.get('/:id', async (req, res) => {
  try {
    res.send(await Campus.getOne(req.params.id));
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    res.send(await Campus.postOrExist(req.body));
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.send(await Campus.updateInfo(req.body, req.params.id));
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.status(204).send(await Campus.remove(req.params.id));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
