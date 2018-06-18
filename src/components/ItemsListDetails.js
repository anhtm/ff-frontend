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
          id: item.id,
          food_id: item.food_id,
          name: item.name
        })
      }
    />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        <CustomButton
          iconName="cake"
          iconStyle="entypo"
          onPress={() => this.props.navigation.navigate('Search')}
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
