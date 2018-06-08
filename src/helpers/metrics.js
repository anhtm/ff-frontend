import _ from 'lodash';

const metrics = [
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

export const titles = {
  dop_pantry: 'In pantry after date of purchase',
  pantry: 'In pantry',
  dop_freeze: 'In freezer after date of purchase',
  freeze: 'In freezer',
  dop_refrigerate: 'In refrigerate after date of purchase',
  refrigerate: 'In refrigerate',
  refrigerate_after_opening: 'In refrigerate after opening',
  refrigerate_after_thawing: 'In refrigerate after thawing'
};

const metricValid = (item, metricKey) => {
  return _.includes(Object.keys(item), metricKey);
};

export const getSections = item => {
  let result = [];
  for (var i = 0; i < metrics.length; i++) {
    if (metricValid(item, metrics[i][0])) {
      result.push(metrics[i]);
    }
  }
  return result;
};

export const formatData = (metric, min = undefined, max = undefined) => {
  if (min === max) {
    return `${min} ${metric}`;
  } else if (min < max) {
    return `From ${min} to ${max} ${metric}`;
  } else if (!min) {
    return `${metric}`;
  }
};
