import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { greyscale } from '../styles/colors';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FreshFridge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  }
});
