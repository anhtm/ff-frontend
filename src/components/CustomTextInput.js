import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={this.props.value}
            autoCorrect={false}
            underlineColorAndroid="transparent"
            onChangeText={text => this.props.setParentState({ value: text })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    height: 50,
    paddingHorizontal: 25
  },
  form: {
    flex: 1,
    paddingVertical: 25
  },
  textWrapper: {
    flex: 3
  },
  text: {
    paddingVertical: 15,
    fontSize: 15
  },
  inputWrapper: {
    flex: 4
  }
});
