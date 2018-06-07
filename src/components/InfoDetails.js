import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { getSections } from '../helpers/metrics';
import InfoCard from './InfoCard';
import _ from 'lodash';

export default class InfoDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderBySection = () => {};

  render() {
    const { item } = this.props;
    let result = getSections(item);
    return (
      <ScrollView style={styles.container}>
        {Object.keys(item).map((key, i) => {
          for (var j = 0; j < result.length; j++) {
            if (
              key == result[j][0] ||
              key == result[j][1] ||
              key == result[j][2] ||
              key == result[j][3]
            ) {
              return <InfoCard key={i} text={key} title={item[key]} />;
            }
          }
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
