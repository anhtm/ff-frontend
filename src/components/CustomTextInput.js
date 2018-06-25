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
      message,
      iconName,
      iconType
    } = this.props;
    return (
      <View style={styles.field}>
        <Icon
          name={iconName}
          type={iconType}
          color={greyscale.darkAccent}
          size={20}
        />
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
  field: {
    flexDirection: 'row',
    marginLeft: 20
  },
  input: {
    color: greyscale.darkAccent
  },
  inputContainer: {
    backgroundColor: greyscale.lightShade,
    borderRadius: 5,
    borderBottomColor: greyscale.darkAccent,
    flex: 1
  }
});
