import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class RoundButton extends Component {
  render() {
    const { onPress, title } = this.props;
    return (
      <Button
        onPress={onPress}
        title={title}
        buttonStyle={styles.button}
        backgroundColor={greyscale.main}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    marginTop: 20
  }
});
