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
      chevron={false}
      chevronColor={greyscale.lightShade}
      checkmark={false}
      topDivider={false}
      bottomDivider={false}
      onPress={() =>
        this.props.navigation.navigate('Result', {
          item: item
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
    color: greyscale.darkAccent
  },
  subtitle: {
    color: greyscale.darkShade
  }
});
