import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';
import { generateData } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import AuthForm from '../components/AuthForm';
import { greyscale } from '../styles/colors';
import Logo from '../components/Logo';
import RoundButton from '../components/RoundButton';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  _onSubmit = () => {
    const { email, password } = this.state;
    let creds = {
      email: email.toLowerCase(),
      password
    };

    if (this.credentialsValid) {
      fetch(backend + 'login', generateData(creds))
        .then(res => {
          if (!res.ok || res.status === 400) {
            // TODO: Do something when there is an error (400 bad request)
            console.warn('The credentials are invalid, please try again.');
          } else {
            this.props.navigation.navigate('SignedInLayout');
            return onSignIn(res.headers.map['x-auth'][0]);
          }
        })
        .catch(error => {
          this.setState({ error });
          // TODO: show validation message if error
          throw error;
        });
    }
  };

  credentialsValid = () => {
    const { email, password } = this.state;
    if (password && email) {
      return true;
    } else {
      this.setState({ error: 'Invalid input' });
      return false;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <AuthForm
          isSignIn={true}
          email={this.state.email}
          password={this.state.password}
          setParentState={newState => this.setState(newState)}
        />

        <RoundButton title="Sign In" onPress={this._onSubmit} />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: greyscale.lightAccent }}
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

// <FormValidationMessage>
//   {'This field is required'}
// </FormValidationMessage>
