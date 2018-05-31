import _ from 'lodash';
import { food_data } from '../config/food_dataset';

export const contains = (
  { name, name_subtitle = '', keywords = '' },
  query
) => {
  if (
    name.includes(query) ||
    name_subtitle.includes(query) ||
    keywords.includes(query)
  ) {
    return true;
  }

  return false;
};

const limit = 3;
export const getFoodData = (query = '') => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(food_data);
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(food_data, item => {
        return contains(item, formattedQuery);
      });
      resolve(results);
    }
  });
};
