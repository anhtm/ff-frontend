import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SectionItem from './SectionItem';
import { toCapital } from '../helpers/toCapital';
import CustomButton from './CustomButton';
import { greyscale } from '../styles/colors';

export default class ItemsListDetails extends Component {
  _renderItem = ({ item }) => (
    <SectionItem
      name={toCapital(item.name)}
      onPress={() =>
        this.props.navigation.navigate('ItemInfo', {
          item
        })
      }
    />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
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
    backgroundColor: greyscale.lightShade
  }
});

/*
<CustomButton
  iconName="cake"
  iconStyle="entypo"
  onPress={() => this.props.navigation.navigate('Search')}
/>
*/
