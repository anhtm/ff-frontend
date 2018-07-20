import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  displayMoment,
  isExpired,
  getCurrentSection
} from '../../helpers/expiryStatus';
import _ from 'lodash';
import { titles } from '../../helpers/metrics';

// Expired or not
export default class ExpiryStatus extends Component {
  displayExpiryStatus = (item, food_info) => {
    const section_food_info = getCurrentSection(item, food_info);
    let section_format = {};
    for (let key of _.keys(section_food_info)) {
      let moment = displayMoment(section_food_info[key], item);
      section_format[key] = moment;
    }
    return section_format;
  };

  render() {
    const { item, food_info } = this.props;
    const section_format = this.displayExpiryStatus(item, food_info);
    return Object.keys(section_format).map((key, i) => {
      let moment = section_format[key];
      if (isExpired(moment)) {
        return (
          <Text key={i}>
            {titles[key]}: {titles.status.expired} {moment}
          </Text>
        );
      } else {
        return (
          <Text key={i}>
            {titles[key]}: {titles.status.expires} {moment}
          </Text>
        );
      }
    });
  }
}
