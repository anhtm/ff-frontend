import _ from 'lodash';
import * as food_data from '../config/full_dataset.json';

const product = food_data.product;
export const categories = food_data.category;

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

export const getCategory = category_id => {
  return new Promise((resolve, reject) => {
    if (id !== 0) {
      resolve(
        _.find(categories, function(item) {
          return item.id === id;
        })
      );
    } else {
      reject();
    }
  });
};

export const getFoodItem = id => {
  return new Promise((resolve, reject) => {
    if (id !== 0) {
      resolve(
        _.find(product, function(item) {
          return item.id === id;
        })
      );
    } else {
      reject();
    }
  });
};

export const getFoodData = (limit = 20, query = '') => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(product, 20));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(product, item => {
        return contains(item, formattedQuery);
      });
      resolve(_.take(results, 20));
    }
  });
};
