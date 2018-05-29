import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';
import { items } from '../config/data';

export default class SectionItem extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Icon
          style={styles.thumbnail}
          name={this.props.icon}
          type={this.props.iconStyle}
        />
        <View style={styles.rowText}>
          <Text style={styles.title} ellipsizeMode={'tail'}>
            {this.props.title}
          </Text>
          <Text style={styles.text}>{this.props.name}</Text>
          <Text style={styles.text}>{this.props.section}</Text>
          <Text style={styles.text}>{this.props.dateAdded}</Text>
          <Text style={styles.text}>{this.props.expiresIn}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 150,
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
  text: {
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
