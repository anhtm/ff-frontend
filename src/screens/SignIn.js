import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../authentication/auth';

export default class SignIn extends Component {
  _onSubmit = () => {
    onSignIn().then(() => this.props.navigation.navigate('SignedInLayout'));
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={this._onSubmit}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: '#bcbec1' }}
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
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
