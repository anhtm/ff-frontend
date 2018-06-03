import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SectionItem from '../components/SectionItem';

export default class SearchResults extends Component {
  _renderItem = ({ item }) => (
    <SectionItem
      name={item.name}
      subtitle={item.name_subtitle}
      onPress={() =>
        this.props.navigation.navigate('Result', {
          food_id: item.id,
          name: item.name
        })
      }
    />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
