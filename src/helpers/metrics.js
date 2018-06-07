import _ from 'lodash';

const metricArray = [
  ['dop_pantry_metric', 'dop_pantry_min', 'dop_pantry_max'],
  ['pantry_metric', 'pantry_min', 'pantry_max', 'pantry_tips'],
  ['dop_freeze_metric', 'dop_freeze_min', 'dop_freeze_max', 'dop_freeze_tips'],
  ['freeze_metric', 'freeze_min', 'freeze_max', 'freeze_tips'],
  [
    'dop_refrigerate_metric',
    'dop_refrigerate_min',
    'dop_refrigerate_max',
    'dop_refrigerate_tips'
  ],
  [
    'refrigerate_metric',
    'refrigerate_min',
    'refrigerate_max',
    'refrigerate_tips'
  ],
  [
    'refrigerate_after_opening_metric',
    'refrigerate_after_opening_min',
    'refrigerate_after_opening_max'
  ],
  [
    'refrigerate_after_thawing_metric',
    'refrigerate_after_thawing_min',
    'refrigerate_after_thawing_max'
  ]
];

export const metricValid = (item, keyMetric) => {
  return _.includes(Object.keys(item), keyMetric);
};

export const getSections = item => {
  let result = [];

  for (var i = 0; i < metricArray.length; i++) {
    if (metricValid(item, metricArray[i][0])) {
      result.push(metricArray[i]);
    }
  }
  return result;
};
