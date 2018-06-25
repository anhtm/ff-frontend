import 'whatwg-fetch';
import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ItemInfoDetails from '../components/ItemInfoDetails';
import { toCapital } from '../helpers/toCapital';
import { backend } from '../config/urls';
import { getDataWithToken } from '../authentication/requests';
import { getToken } from '../authentication/auth';
import { getFoodItem } from '../helpers/fetchDataset';
import { greyscale } from '../styles/colors';

export default class ItemInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: toCapital(navigation.getParam('item', 'no-item').name)
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam('item', 'no-item'),
      food_info: {},
      error: null
    };
  }

  componentDidMount() {
    this.getFoodInfo();
  }

  getFoodInfo = () => {
    const food_id = this.state.item.food_id;
    getFoodItem(food_id)
      .then(item => {
        this.setState({ food_info: item });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <ItemInfoDetails
          item={this.state.item}
          food_info={this.state.food_info}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  }
});
