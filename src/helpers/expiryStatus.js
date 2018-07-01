const moment = require('moment');
const _ = require('lodash');
const { formatDataIntoLabels } = require('../helpers/metrics');

export const sections = [
  {
    id: 1,
    name: 'refrigerate'
  },
  {
    id: 2,
    name: 'freeze'
  },
  {
    id: 3,
    name: 'pantry'
  }
];

const food_info = {
  category_id: 7,
  dop_refrigerate_max: 3,
  dop_refrigerate_metric: 'weeks',
  dop_refrigerate_min: 3,
  id: 8,
  keywords: 'coffee creamer,coffee, creamer,liquid refrigerated',
  name: 'coffee creamer',
  name_subtitle: 'liquid refrigerated',
  refrigerate_after_opening_max: 1,
  refrigerate_after_opening_metric: 'weeks',
  refrigerate_after_opening_min: 1,
  dop_freeze_max: 9,
  dop_freeze_metric: 'months',
  dop_freeze_min: 6
};

const item = {
  date_added: '2018-06-25',
  done: false,
  expired: false,
  food_id: 8,
  id: 15,
  isFavorite: false,
  name: 'coffee creamer',
  section_id: 1,
  user_id: 1
};

const getCurrentSection = (item, food_info) => {
  const formatted_food_info = formatDataIntoLabels(food_info);
  let result = {};
  const section = _.find(sections, section => {
    return section.id === item.section_id;
  });
  for (let key of _.keys(formatted_food_info)) {
    if (key.includes(section.name)) {
      result[key] = formatted_food_info[key];
    }
  }
  return result;
};

const displayMoment = (expiry_info, item) => {
  const { min, max, metric } = expiry_info;
  const start_date = moment(item.date_added);
  let now = moment();
  let min_deadline = start_date.clone().add(min, metric);
  let max_deadline = start_date.clone().add(max, metric);
  return now.to(max_deadline);
};

const isExpired = moment => {
  if (moment.includes('in')) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  displayMoment,
  isExpired,
  getCurrentSection,
  sections
};
