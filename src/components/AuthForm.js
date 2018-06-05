import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/CustomTextInput';
import { Card } from 'react-native-elements';

export default class AuthForm extends Component {
  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_pw,
      setParentState,
      isSignIn
    } = this.props;

    if (isSignIn) {
      return (
        <View>
          <Card>
            <CustomInput
              label="Email"
              placeholder="email@example.com"
              onChange={text => setParentState({ email: text })}
            />

            <CustomInput
              label="Password"
              secureTextEntry={true}
              onChange={text => setParentState({ password: text })}
            />
          </Card>
        </View>
      );
    } else {
      return (
        <View>
          <Card>
            <CustomInput
              label="First Name"
              placeholder="John"
              onChange={text => setParentState({ first_name: text })}
            />

            <CustomInput
              label="Last Name"
              placeholder="Doe"
              onChange={text => setParentState({ last_name: text })}
            />

            <CustomInput
              label="Email"
              placeholder="email@example.com"
              onChange={text => setParentState({ email: text })}
            />

            <CustomInput
              label="Password"
              secureTextEntry={true}
              onChange={text => setParentState({ password: text })}
            />

            <CustomInput
              label="Confirm Password"
              secureTextEntry={true}
              onChange={text => setParentState({ confirm_pw: text })}
            />
          </Card>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({});
