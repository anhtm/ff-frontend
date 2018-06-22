import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { getFoodItem, categories } from '../helpers/fetchDataset';
import SectionItem from '../components/SectionItem';
import FoodInfoDetails from '../components/FoodInfoDetails';
import { greyscale } from '../styles/colors';

import _ from 'lodash';

export default class Result extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item', 'no-item').name
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      item: this.props.navigation.getParam('item', 'no-item'),
      error: null,
      category: {}
    };
  }

  componentDidMount() {
    this.getItemCategory();
  }

  getItemCategory = () => {
    _.find(categories, item => {
      if (item.id === this.state.item.category_id) {
        this.setState({ category: item });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FoodInfoDetails
          item={this.state.item}
          category={this.state.category}
        />
        <Button
          iconRight={{ name: 'cake', type: 'entypo' }}
          title="Add to Inventory"
          backgroundColor={greyscale.main}
          onPress={() => {
            this.props.navigation.navigate('AddItem', {
              item: this.state.item
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

/*
fetchItem = () => {
  this.setState({ isLoading: true });
  const food_id = this.props.navigation.getParam('food_id', 'NO-FoodId');
  getFoodItem(food_id)
    .then(item => {
      this.setState({
        item,
        isLoading: false
      });
    })
    .then(() => {
      this.getItemCategory();
    })
    .catch(error => {
      this.setState({ error });
    });
};
*/
