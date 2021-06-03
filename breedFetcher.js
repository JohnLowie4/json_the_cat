const request = require('request');
const catBreed = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fectchBreedDescription = function(breedName, callback) {
  request(catBreed + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (!error) {
      const data = JSON.parse(body)[0];
      if (!data) callback(null, "Breed Not Found");
      if (data) callback(null, data.description);
    }
  });
};

module.exports = {
  fectchBreedDescription
};