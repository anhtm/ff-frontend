import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Input,
  Icon
} from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      label,
      placeholder,
      onChange,
      secureTextEntry,
      message
    } = this.props;
    return (
      <View style={styles.field}>
        <FormInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          placeholder={label}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
        />
        <FormValidationMessage>{message}</FormValidationMessage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: greyscale.darkAccent
  },
  inputContainer: {
    backgroundColor: greyscale.lightShade,
    borderRadius: 5,
    borderBottomColor: greyscale.darkAccent,
    width: '100%'
  }
});
