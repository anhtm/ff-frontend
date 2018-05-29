import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { sections } from '../config/data';
import { ListItem } from 'react-native-elements';
import SectionItem from '../components/SectionItem';

export default class SectionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: sections };
  }

  _onSeeItems = () => {
    this.props.navigation.navigate('ItemsList');
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <SectionItem
      name={item.name}
      icon={item.icon}
      iconStyle={item.style}
      onPress={() =>
        this.props.navigation.navigate('ItemsList', {
          section_id: item.id,
          section_name: item.name
        })
      }
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.sections}
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
    backgroundColor: '#F5FCFF'
  }
});
