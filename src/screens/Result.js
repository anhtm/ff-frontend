import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFoodItem, categories } from '../helpers/fetchStimulate';
import SectionItem from '../components/SectionItem';
import InfoDetails from '../components/InfoDetails';
import { greyscale } from '../styles/colors';
import _ from 'lodash';

export default class Result extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'No-Name')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      item: {},
      error: null
      // categories: categories,
      // category: {}
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

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
      .catch(error => {
        this.setState({ error });
      });
  };

  getItemCategory = () => {
    _.find(this.state.categories, item => {
      if (item.id === this.state.item.category_id) {
        this.setState({ category: item });
        return item;
      }
    });
  };

  render() {
    console.log(this.state);
    // TODO: conditional render food data
    return (
      <View style={styles.container}>
        <InfoDetails item={this.state.item} />
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
