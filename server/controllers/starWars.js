const fetch = require('node-fetch');

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => {
      res.locals.characters = data.results;
      next();
    });
};

module.exports = starWarsController;
