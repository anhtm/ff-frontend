import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class CustomSearchBar extends Component {
  render() {
    return (
      <View>
        <SearchBar
          round
          lightTheme
          showLoading
          searchIcon={{ size: 24 }}
          onChangeText={this.props.onChangeText}
          onClear={this.props.onClear}
          placeholder="Type Here..."
        />
      </View>
    );
  }
}
