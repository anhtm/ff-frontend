import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { getSections, titles, formatData } from '../helpers/metrics';
import { greyscale } from '../styles/colors';
import _ from 'lodash';

export default class InfoDetails extends Component {
  mergeGroupWithData = () => {
    const { item } = this.props;
    let merged = {};
    let result = getSections(item);
    for (var i = 0; i < result.length; i++) {
      let group = result[i][0].substring(0, result[i][0].lastIndexOf('_'));
      merged[group] = {};
      for (var j = 0; j < result[i].length; j++) {
        merged[group][result[i][j]] = item[result[i][j]];
      }
    }
    return merged;
  };

  render() {
    const results = this.mergeGroupWithData();
    const { category } = this.props;
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>Category</Text>
          <Text style={styles.text}>{category.category_name}</Text>
        </View>
        {Object.keys(results).map((key, i) => {
          return (
            <View key={i}>
              <Text style={styles.title}>{titles[key]}</Text>
              <Text style={styles.text}>
                {formatData(
                  results[key][Object.keys(results[key])[0]],
                  results[key][Object.keys(results[key])[1]],
                  results[key][Object.keys(results[key])[2]]
                )}
              </Text>
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
    color: greyscale.main
  }
});
