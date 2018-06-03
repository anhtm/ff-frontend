import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CustomSearchBar from '../components/SearchBar';
import { contains, getFoodData } from '../helpers/fetchStimulate';
import _ from 'lodash';
import SearchResults from '../components/SearchResults';

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
    getFoodData(20, this.state.query)
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

  render() {
    return (
      <View style={styles.container}>
        <CustomSearchBar onChangeText={this.handleSearch} />
        <SearchResults
          data={this.state.data}
          navigation={this.props.navigation}
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
