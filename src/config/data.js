export const users = [
  {
    id: 1,
    first_name: 'test',
    last_name: 'one',
    email: 'test1@test.com'
  },
  {
    id: 2,
    first_name: 'test',
    last_name: 'two',
    email: 'test2@test.com'
  },
  {
    id: 3,
    first_name: 'test',
    last_name: 'three',
    email: 'test3@test.com'
  },
  {
    id: 4,
    first_name: 'test',
    last_name: 'four',
    email: 'test4@test.com'
  }
];

export const sections = [
  {
    id: 1,
    name: 'Fridge',
    icon: 'fridge',
    style: 'material-community'
  },
  {
    id: 2,
    name: 'Freezer',
    icon: 'snowflake',
    style: 'material-community'
  },
  {
    id: 3,
    name: 'Pantry',
    icon: 'box',
    style: 'entypo'
  }
];

export const items = [
  {
    id: 1,
    name: 'chicken',
    done: true,
    food_id: 113,
    section_id: 2,
    expired: false,
    user_id: 3,
    createdAt: '05/28/2018'
  },
  {
    id: 2,
    name: 'strawberries',
    done: false,
    food_id: 481,
    section_id: 1,
    expired: true,
    user_id: 1,
    createdAt: '05/28/2018'
  },
  {
    id: 3,
    name: 'ham',
    done: false,
    food_id: 108,
    section_id: 3,
    expired: false,
    user_id: 4,
    createdAt: '05/28/2018'
  },
  {
    id: 4,
    name: 'kimchi',
    done: false,
    food_id: 493,
    section_id: 1,
    expired: false,
    user_id: 2,
    createdAt: '05/28/2018'
  }
];

export const food_data = [
  {
    id: 1,
    category_id: 7,
    name: 'Butter',
    keywords: 'Butter',
    pantry_tips: 'May be left at room temperature for 1 - 2 days.',
    dop_refrigerate_min: 1,
    dop_refrigerate_max: 2,
    dop_refrigerate_metric: 'Months',
    dop_freeze_min: 6,
    dop_freeze_max: 9,
    dop_freeze_metric: 'Months'
  },
  {
    id: 2,
    category_id: 7,
    name: 'Buttermilk',
    keywords: 'Buttermilk',
    dop_refrigerate_min: 1,
    dop_refrigerate_max: 2,
    dop_refrigerate_metric: 'Weeks',
    dop_freeze_min: 3,
    dop_freeze_max: 3,
    dop_freeze_metric: 'Months'
  },
  {
    id: 3,
    category_id: 7,
    name: 'Cheese',
    name_subtitle: 'hard such as cheddar, swiss, block parmesan',
    keywords: 'Cheese,cheddar, swiss,parmesan',
    dop_refrigerate_min: 6,
    dop_refrigerate_max: 6,
    dop_refrigerate_metric: 'Months',
    refrigerate_after_opening_min: 3,
    refrigerate_after_opening_max: 4,
    refrigerate_after_opening_metric: 'Weeks',
    dop_freeze_min: 6,
    dop_freeze_max: 6,
    dop_freeze_metric: 'Months'
  },
  {
    id: 22,
    category_id: 7,
    name: 'Eggs',
    name_subtitle: 'raw whites, yolks',
    keywords: 'Eggs,raw whites, yolks,egg,whites',
    refrigerate_min: 2,
    refrigerate_max: 4,
    refrigerate_metric: 'Days',
    freeze_min: 12,
    freeze_max: 12,
    freeze_metric: 'Months'
  }
];
