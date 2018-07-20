// should be a mixins
import { Alert } from 'react-native';
export const alert = (title, msg, route) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: 'OK'
      }
    ],
    { cancelable: false }
  );
};
