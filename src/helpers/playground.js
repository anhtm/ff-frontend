/* var validate = require('validate.js');
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
); */

var getSections = require('../helpers/metrics');

const item = {
  id: 3,
  category_id: 7,
  name: 'cheese',
  name_subtitle: 'hard such as cheddar, swiss, block parmesan',
  keywords: 'cheese,cheddar, swiss,parmesan',
  dop_refrigerate_min: 6,
  dop_refrigerate_max: 6,
  dop_refrigerate_metric: 'months',
  refrigerate_after_opening_min: 3,
  refrigerate_after_opening_max: 4,
  refrigerate_after_opening_metric: 'weeks',
  dop_freeze_min: 6,
  dop_freeze_max: 6,
  dop_freeze_metric: 'months'
};

const result = getSections(item);

console.log(result);
