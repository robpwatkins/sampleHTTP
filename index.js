const axios = require('axios');

axios('https://puppyapi.com')
  .then(res => console.log(res));