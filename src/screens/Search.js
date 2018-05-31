import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import CustomSearchBar from '../components/SearchBar';
import { food_data } from '../config/data';
import { contains, getFoodData } from '../helpers/fetchStimulate';
import SectionItem from '../components/SectionItem';
import _ from 'lodash';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isLoading: false,
      data: [],
      fullData: [],
      error: null
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ isLoading: true });
    getFoodData(this.state.query)
      .then(items => {
        this.setState({
          isLoading: false,
          data: items,
          fullData: items
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }, 250);

  handleSearch = text => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, item => {
      return contains(item, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  _renderItem = ({ item }) => (
    <SectionItem
      name={item.name}
      subtitle={item.name_subtitle}
      onPress={() =>
        this.props.navigation.navigate('Result', { food_id: item.id })
      }
    />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <CustomSearchBar onChangeText={this.handleSearch} />
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 18,
    margin: 5
  },
  subtitle: {
    margin: 3
  }
});
