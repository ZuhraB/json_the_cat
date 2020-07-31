
const request = require('request');


const fetchBreedDescription = function(breedName, callback){



  console.log("breedName =" ,breedName)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(`URL not found!${ error }`,null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("Breed Not Found!");
      callback("Breed Not Found", null);
    return;
  }
      callback(null, data[0].description);
  });
}
 module.exports = { fetchBreedDescription };


 