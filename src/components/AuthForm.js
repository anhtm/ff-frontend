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
      isSignIn,
      msgEmail,
      msgPassword,
      msgFirstName,
      msgLastName,
      msgConfirmPw
    } = this.props;

    if (isSignIn) {
      return (
        <View>
          <Card>
            <CustomInput
              label="Email"
              placeholder="email@example.com"
              onChange={text => setParentState({ email: text })}
              message={msgEmail}
            />

            <CustomInput
              label="Password"
              secureTextEntry={true}
              onChange={text => setParentState({ password: text })}
              message={msgPassword}
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
              message={msgFirstName}
            />

            <CustomInput
              label="Last Name"
              placeholder="Doe"
              onChange={text => setParentState({ last_name: text })}
              message={msgLastName}
            />

            <CustomInput
              label="Email"
              placeholder="email@example.com"
              onChange={text => setParentState({ email: text })}
              message={msgEmail}
            />

            <CustomInput
              label="Password"
              secureTextEntry={true}
              onChange={text => setParentState({ password: text })}
              message={msgPassword}
            />

            <CustomInput
              label="Confirm Password"
              secureTextEntry={true}
              onChange={text => setParentState({ confirm_pw: text })}
              message={msgConfirmPw}
            />
          </Card>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({});
