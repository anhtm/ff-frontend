import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

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
      <View style={styles.formContainer}>
        <FormLabel style={styles.text}>{label}</FormLabel>

        <View style={styles.inputWrapper}>
          <FormInput
            placeholder={placeholder}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
          />
          <FormValidationMessage>{message}</FormValidationMessage>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // formContainer: {
  //   flexDirection: 'row',
  //   borderTopWidth: 0.5,
  //   height: 50,
  //   paddingHorizontal: 25
  // },
  // form: {
  //   flex: 1,
  //   paddingVertical: 25
  // },
  // textWrapper: {
  //   flex: 3
  // },
  // text: {
  //   paddingVertical: 15,
  //   fontSize: 15
  // },
  // inputWrapper: {
  //   flex: 4
  // }
});
