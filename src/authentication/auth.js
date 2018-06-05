import { AsyncStorage } from 'react-native';

export const USER_KEY = '';

export const onSignIn = async function(value) {
  if (value) {
    return await AsyncStorage.setItem(USER_KEY, value);
  }
};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
