import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

// Favorite or not
export default class Favorite extends React.Component {
  renderFavorite(item) {
    if (item.isFavorite) {
      return <Icon name="heart" type="entypo" size={28} />;
    }
  }

  render() {
    const { item } = this.props;
    return <View>{this.renderFavorite(item)}</View>;
  }
}
