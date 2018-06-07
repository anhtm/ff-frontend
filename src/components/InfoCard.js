import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class InfoCard extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Text style={styles.title} ellipsizeMode={'tail'}>
            {title}
          </Text>
          <Text style={styles.text} ellipsizeMode={'tail'}>
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    height: 'auto',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: greyscale.darkAccent
  },
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: greyscale.main
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});
