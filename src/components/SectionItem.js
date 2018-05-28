import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { items } from '../config/data';

export default class SectionItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.rowContainer}>
          <Icon
            style={styles.thumbnail}
            name={this.props.icon}
            type={this.props.iconStyle}
          />
          <View style={styles.rowText}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
              {this.props.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});
