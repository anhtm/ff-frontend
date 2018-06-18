import 'whatwg-fetch';
import { backend } from '../config/urls';
import { getToken } from './auth';

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

export const getDataWithToken = token => {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token
    },
    mode: 'cors'
  };
};

export const sendDataWithToken = (info, token) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token
    },
    mode: 'cors',
    body: JSON.stringify(info)
  };
};

export const getRemoteRequest = path => {
  getToken().then(token => {
    fetch(path, dataWithToken(token));
  });
};

// export const login = credentials => {
//   return fetch(backend + 'login', generateData(credentials));
// };
//
// export const createUser = info => {
//   return fetch(backend + 'user', generateData(info));
// };
