import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { items } from '../config/data';
import { greyscale } from '../styles/colors';

export default class SectionItem extends Component {
  render() {
    const { onPress, icon, iconStyle, name, subtitle } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rowContainer}>
          <Icon name={icon} type={iconStyle} color={greyscale.lightShade} />
          <View style={styles.rowText}>
            <Text style={styles.title} ellipsizeMode={'tail'}>
              {name}
            </Text>
            <Text style={styles.text} ellipsizeMode={'tail'}>
              {subtitle}
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
    height: 75,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: greyscale.main
  },
  title: {
    paddingLeft: 10,
    paddingTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: greyscale.lightShade
  },
  text: {
    paddingLeft: 10,
    marginTop: 15,
    fontSize: 14,
    color: greyscale.lightAccent
  },
  rowText: {
    flexDirection: 'row'
  }
});
