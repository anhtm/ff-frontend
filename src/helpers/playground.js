var validate = require('validate.js');
var constraints = require('../helpers/validation');

console.log(
  validate(
    {
      first_name: '',
      last_name: '',
      email: 'myemail',
      password: 'bad',
      confirm_pw: 'wrong'
    },
    constraints
  )
);
