import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SectionItem from '../components/SectionItem';
import { ListItem } from 'react-native-elements';
import { greyscale } from '../styles/colors';

export default class SearchResults extends Component {
  _renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleStyle={styles.title}
      subtitle={item.name_subtitle}
      subtitleStyle={styles.subtitle}
      chevronColor={greyscale.lightAccent}
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

const styles = StyleSheet.create({
  title: {
    color: greyscale.darkShade
  },
  subtitle: {
    color: greyscale.darkAccent
  }
});
