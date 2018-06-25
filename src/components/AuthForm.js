import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/CustomTextInput';

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
          <CustomInput
            label="Email"
            placeholder="email@example.com"
            onChange={text => setParentState({ email: text })}
            message={msgEmail}
            iconName="mail-outline"
          />

          <CustomInput
            label="Password"
            secureTextEntry={true}
            onChange={text => setParentState({ password: text })}
            message={msgPassword}
            iconName="lock-outline"
          />
        </View>
      );
    } else {
      return (
        <View>
          <CustomInput
            label="First Name"
            placeholder="John"
            onChange={text => setParentState({ first_name: text })}
            message={msgFirstName}
            iconName="person-outline"
          />

          <CustomInput
            label="Last Name"
            placeholder="Doe"
            onChange={text => setParentState({ last_name: text })}
            message={msgLastName}
            iconName="person-outline"
          />

          <CustomInput
            label="Email"
            placeholder="email@example.com"
            onChange={text => setParentState({ email: text })}
            message={msgEmail}
            iconName="mail-outline"
          />

          <CustomInput
            label="Password"
            secureTextEntry={true}
            onChange={text => setParentState({ password: text })}
            message={msgPassword}
            iconName="lock-outline"
          />

          <CustomInput
            label="Confirm Password"
            secureTextEntry={true}
            onChange={text => setParentState({ confirm_pw: text })}
            message={msgConfirmPw}
            iconName="lock-outline"
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({});
