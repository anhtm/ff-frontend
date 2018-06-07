import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { items } from '../config/data';
import CustomTextInput from './CustomTextInput';

export default class SectionItem extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Text style={styles.title} ellipsizeMode={'tail'}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
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
    color: '#777'
  },
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});
