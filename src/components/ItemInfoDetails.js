import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { greyscale } from '../styles/colors';
import {
  displayMoment,
  isExpired,
  getCurrentSection
} from '../helpers/expiryStatus';
import { titles, formatDataIntoLabels } from '../helpers/metrics';
import _ from 'lodash';

export default class ItemInfoDetails extends Component {
  renderFavorite(item) {
    if (item.isFavorite) {
      return 'is favorite';
    } else {
      return 'is not favorite';
    }
  }

  renderExpiryStatus = (item, food_info) => {
    const section_food_info = getCurrentSection(item, food_info);
    console.log('section', section_food_info);
    for (let key of _.keys(section_food_info)) {
      let moment = displayMoment(section_food_info[key], item);
      console.log(moment);
      if (isExpired(moment)) {
        return (
          <Text style={styles.text}>
            {titles.status.expired}: {moment}
          </Text>
        );
      } else {
        return (
          <Text style={styles.text}>
            {titles.status.expires}: {moment}
          </Text>
        );
      }
    }
  };

  render() {
    const { item, food_info } = this.props;
    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Text style={styles.title} ellipsizeMode={'tail'}>
            Name: {item.name}
          </Text>
          <Text style={styles.text}>
            Preference: {this.renderFavorite(item)}
          </Text>
          <Text style={styles.text}>Date Added: {item.date_added}</Text>
          {this.renderExpiryStatus(item, food_info)}
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
