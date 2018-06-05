import 'whatwg-fetch';
import { backend } from '../config/urls';

export const generateData = info => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(info)
  };
};

export const login = credentials => {
  return fetch(backend + 'login', generateData(credentials));
};

export const createUser = info => {
  return fetch(backend + 'user', generateData(info));
};
