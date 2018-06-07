import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class CustomButton extends Component {
  render() {
    const { onPress, iconName, iconType } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Icon reverse name={this.props.iconName} type={this.props.iconType} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end'
  }
});
