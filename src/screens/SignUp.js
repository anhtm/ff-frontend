import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';
import { createUser, generateData } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import AuthForm from '../components/AuthForm';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_pw: ''
    };
  }

  _onSubmit = () => {
    fetch(backend + 'user', generateData(this.formatData()))
      .then(res => {
        return res.json();
      })
      .then(jsondata => {
        console.log(jsondata);
        // TODO: alert user to check Email
        // TODO: navigate to a waiting screen.
        // this.props.navigation.navigate('SignedInLayout');
        this.setState({ user: jsondata });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  formatData = () => {
    const { first_name, last_name, email, password, confirm_pw } = this.state;
    if (confirm_pw === password && password.length >= 8) {
      return {
        first_name: first_name.toLowerCase(),
        last_name: last_name.toLowerCase(),
        email: email.toLowerCase(),
        password
      };
    }
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <AuthForm
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          confirm_pw={this.state.confirm_pw}
          setParentState={newState => this.setState(newState)}
        />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="SIGN UP"
          onPress={this._onSubmit}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: '#bcbec1' }}
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
