import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { greyscale } from '../styles/colors';
import Favorite from './item-info-in-details/Favorite';
import ExpiryStatus from './item-info-in-details/ExpiryStatus';

const DateAdded = date => {
  return <Text>Date Added: {date}</Text>;
};

export default class ItemInfoDetails extends Component {
  render() {
    const { item, food_info } = this.props;
    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Favorite item={item} />
          <ExpiryStatus item={item} food_info={food_info} />
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
  }
});
