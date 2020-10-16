const axios = require('axios');

axios.head('https://austincodingacademy.com/faq')
  .then(response => console.log(response));