/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

const starWarsController = require('../controllers/starWars');

router.get('/', (req, res) => {
  res.status(200).send({ msg: 'Spark!' });
});

router.get('/star-wars', starWarsController.getCharacters, (req, res, next) => {
  res.status(200).send({ characters: res.locals.characters });
});

module.exports = router;
