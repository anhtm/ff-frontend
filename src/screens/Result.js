import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Result extends Component {
  render() {
    console.log(this.props.navigation.getParam('food_id', 'NO-FoodId'));
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Result</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
