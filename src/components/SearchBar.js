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
          clearIcon={{ size: 24, paddingRight: 10 }}
          cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          searchIcon={{ size: 24 }}
          onChangeText={this.props.onChangeText}
          onClear={this.props.onClear}
          placeholder="Try 'chicken'"
        />
      </View>
    );
  }
}
