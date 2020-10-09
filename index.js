const axios = require('axios');

axios('https://austincodingacademy.com/faq')
  .then(response => console.log(response));