import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CustomSearchBar from '../components/SearchBar';
import { food_data } from '../config/data';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: false,
      data: food_data,
      result: []
    };
  }

  _renderItem = ({ item }) => (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.name_subtitle}</Text>
    </View>
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <CustomSearchBar />
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
