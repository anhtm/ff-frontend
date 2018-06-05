import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';
import { createUser, generateData } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import CustomInput from '../components/CustomTextInput';

export default class SignIn extends Component {
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
    let info = {
      first_name: 'test',
      last_name: 'signup',
      email: 'test3@signup.com',
      password: 'helloworld'
    };

    fetch(backend + 'user', generateData(info))
      .then(res => {
        return res.json();
      })
      .then(jsondata => {
        console.log(jsondata);
        // TODO: alert user to check Email
        this.props.navigation.navigate('SignedInLayout');
        this.setState({ user: jsondata });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Card>
          <CustomInput
            label="First Name"
            placeholder="John"
            onChange={text => this.setState({ first_name: text })}
          />

          <CustomInput
            label="Last Name"
            placeholder="Doe"
            onChange={text => this.setState({ last_name: text })}
          />

          <CustomInput
            label="Email"
            placeholder="email@example.comohn"
            onChange={text => this.setState({ email: text })}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            onChangeText={text => this.setState({ passsword: text })}
          />

          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            secureTextEntry
            onChangeText={text => this.setState({ confirm_pw: text })}
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
        </Card>
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
