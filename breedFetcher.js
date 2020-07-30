
const request = require('request');
var args = process.argv.slice(2);
const breadName = args[0];


 
request(`https://api.thecatapi.com/v1/breeds/search?q=${breadName}`, function (error, response, body) {
const data = JSON.parse(body);
if (data[0].id === breadName){
  console.log(data[0].description)
}else{
  console.log("Bread Not Found")
}



});