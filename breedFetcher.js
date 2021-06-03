const request = require('request');
const args = process.argv;
const breed = args[2];
const catBreed = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(catBreed, (error, response, body) => {
  if (error) {
    console.error("Request Failed");
  } else if (!error) {
    const data = JSON.parse(body)[0];
    if (!data) console.log('Breed Not Found');
    if (data) console.log(data.description);
  }
});