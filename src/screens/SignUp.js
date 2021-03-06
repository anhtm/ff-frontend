import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';
import { generateData } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import AuthForm from '../components/AuthForm';
import validate from 'validate.js';
import { constraints } from '../helpers/validation';
import { greyscale } from '../styles/colors';
import Logo from '../components/Logo';
import RoundButton from '../components/RoundButton';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {},
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_pw: '',
      error: {}
    };
  }

  _onSubmit = () => {
    this._validateForm();
    fetch(backend + 'user', generateData(this.formatData()))
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          console.log('Success');
        }
        return res.json();
      })
      .then(json => {
        console.log('json result', json);
        // TODO: alert user to check Email if success
        // TODO: navigate to a waiting screen.
        this.setState({ result: json });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  formatData = () => {
    const { first_name, last_name, email, password, confirm_pw } = this.state;
    return {
      first_name: first_name.toLowerCase(),
      last_name: last_name.toLowerCase(),
      email: email.trim().toLowerCase(),
      password
    };
  };

  _validateForm = () => {
    const { first_name, last_name, email, password, confirm_pw } = this.state;
    // if (!first_name) {
    //   this.setState({ error: { msgFirstName: 'This field is required' } });
    // } else if (password !== confirm_pw) {
    //   this.setState({
    //     error: { msgConfirmPw: 'Your passwords do not match.' }
    //   });
    // }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Logo />
        <AuthForm
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          confirm_pw={this.state.confirm_pw}
          setParentState={newState => this.setState(newState)}
          msgFirstName={this.state.error.msgFirstName}
          msgConfirmPw={this.state.error.msgConfirmPw}
        />

        <RoundButton title="Sign Up" onPress={this._onSubmit} />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: greyscale.lightAccent }}
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  }
});
