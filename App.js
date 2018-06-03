import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { backend } from './src/config/urls';
import {
  SignedInLayout,
  SignedOutLayout,
  createRootNavigator
} from './router.js';
import { isSignedIn } from './src/authentication/auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('Sorry, an error occurred'));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// componentDidMount() {
//   return fetch(backend + 'users', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   })
//     .then(res => {
//       console.log('raw response: ' + res);
//       return res.json();
//     })
//     .then(responseData => {
//       console.log('JSON response: ' + responseData);
//       this.setState({ users: responseData });
//     })
//     .catch(err => {
//       console.log(err.message);
//       throw err;
//     });
// }
