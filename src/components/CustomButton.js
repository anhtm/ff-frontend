import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class CustomButton extends Component {
  render() {
    const { onPress, iconName, iconType } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Icon name={iconName} type={iconType} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10
  }
});
