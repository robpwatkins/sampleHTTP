const axios = require('axios');

axios('http://austincodingacademy.com')
  .then(response => console.log(response));