import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              onSignIn().then(() =>
                this.props.navigation.navigate('SignedInLayout')
              );
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: '#bcbec1' }}
            title="Sign In"
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
