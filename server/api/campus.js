const router = require('express').Router();
const Campus = require('../db/todos/campus');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Campus.getAll());
  } catch (err) {
    next(err);
  }
});

router.get('/:id/students', async (req, res, next) => {
  try {
    res.send(await Campus.getStudents(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Campus.getOne(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.send(await Campus.postOrExist(req.body));
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    res.send(await Campus.updateInfo(req.body, req.params.id));
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.status(204).send(await Campus.remove(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
