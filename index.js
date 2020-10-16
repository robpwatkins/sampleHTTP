const axios = require('axios');

axios.head('https://austincodingacademy.com/')
  .then(function (response) {
    console.log(response)
  })