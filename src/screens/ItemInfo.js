import _ from 'lodash';
import 'whatwg-fetch';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { items } from '../config/data';
import { dataset } from '../config/urls';
import InfoCard from '../components/InfoCard';
import { toCapital } from '../helpers/toCapital';
import { greyscale } from '../styles/colors';

export default class ItemInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: toCapital(navigation.getParam('name', 'NO-NAME'))
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      items: items,
      item: {},
      food_info: {}
    };
  }

  componentDidMount() {
    const item_id = this.props.navigation.getParam('id', 'NO-ID');
    const item_index = _.findIndex(this.state.items, { id: item_id });
    this.setState({ item: this.state.items[item_index] });
    return fetch(
      dataset +
        'product?id=' +
        this.props.navigation.getParam('food_id', 'NO-FoodId')
    )
      .then(res => {
        return res.json();
      })
      .then(resData => {
        this.setState({ food_info: resData });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  }
});
