import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { greyscale } from '../styles/colors';
import { Button } from 'react-native-elements';
import Logo from '../components/Logo';
import RoundButton from '../components/RoundButton';

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <RoundButton
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <RoundButton
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
