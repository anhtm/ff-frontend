import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';
import 'whatwg-fetch';
import { backend } from './src/config/urls';
import { Tabs } from './router.js';
export default class App extends React.Component {
  state = {
    users: []
  };

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

  render() {
    // console.log(this.state);
    return <Tabs />;
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
