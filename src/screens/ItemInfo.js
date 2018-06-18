import 'whatwg-fetch';
import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ItemInfoDetails from '../components/ItemInfoDetails';
import { toCapital } from '../helpers/toCapital';
import { backend } from '../config/urls';
import { dataWithToken } from '../authentication/requests';
import { getToken } from '../authentication/auth';
import { getFoodItem } from '../helpers/fetchDataset';
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
      item: {},
      food_info: {},
      error: null
    };
  }

  componentDidMount() {
    this.fetchItemDetails();
    this.getFoodInfo();
  }

  fetchItemDetails = () => {
    const item_id = this.props.navigation.getParam('id', 'NO-ID');
    const path = `${backend}item/${item_id}`;
    getToken().then(token => {
      fetch(path, dataWithToken(token))
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.setState({ item: json });
        })
        .catch(error => {
          this.setState({ error });
        });
    });
  };

  getFoodInfo = () => {
    const food_id = this.props.navigation.getParam('food_id', 'NO-FoodID');
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
        <ItemInfoDetails item={this.state.item} />
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
