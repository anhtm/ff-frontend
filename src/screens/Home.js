import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { greyscale } from '../styles/colors';
import CustomButton from '../components/AuthForm';

export default class Home extends Component {
  state = {
    modalVisible: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
