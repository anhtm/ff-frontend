import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFoodItem, getCategory } from '../helpers/fetchStimulate';
import SectionItem from '../components/SectionItem';

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
      error: null,
      category: {}
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
        this.setState(
          {
            item,
            isLoading: false
          },
          () => {
            getCategory(this.state.item.category_id).then(result => {
              this.setState({
                category: result
              });
            });
          }
        );
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <SectionItem
          name={'Subtitle'}
          subtitle={this.state.item.name_subtitle}
        />
        <SectionItem
          name={'Category'}
          subtitle={this.state.category.category_name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
