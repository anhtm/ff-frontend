import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { onSignOut } from '../authentication/auth';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() =>
            onSignOut().then(() =>
              this.props.navigation.navigate('SignedOutLayout')
            )
          }
        />
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
