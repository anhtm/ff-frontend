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
