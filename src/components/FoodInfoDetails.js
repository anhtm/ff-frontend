import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import {
  getSections,
  titles,
  humanizeData,
  formatDataIntoLabels
} from '../helpers/metrics';
import { greyscale } from '../styles/colors';
import _ from 'lodash';

export default class InfoDetails extends Component {
  render() {
    const { category, item, expiry_info } = this.props;
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>Category</Text>
          <Text style={styles.text}>{category.category_name}</Text>
        </View>
        {Object.keys(expiry_info).map((key, i) => {
          return (
            <View key={i}>
              <Text style={styles.title}>{titles[key]}</Text>
              <Text style={styles.text}>{humanizeData(expiry_info[key])}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: greyscale.darkAccent
  },
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: greyscale.darkShade
  }
});
