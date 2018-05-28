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
    name: 'Fridge',
    icon: 'fridge',
    style: 'material-community'
  },
  {
    name: 'Freezer',
    icon: 'snowflake',
    style: 'material-community'
  },
  {
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
    food_id: 6,
    section: 'freezer',
    expired: false,
    user_id: 1
  },
  {
    id: 2,
    name: 'strawberries',
    done: false,
    food_id: 34,
    section: 'fridge',
    expired: false,
    user_id: 2
  },
  {
    id: 3,
    name: 'Black beans',
    done: false,
    food_id: 6,
    section: 'pantry',
    expired: false,
    user_id: 3
  }
];
