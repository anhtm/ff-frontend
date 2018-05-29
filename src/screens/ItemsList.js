import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { items } from '../config/data';
import SectionItem from '../components/SectionItem';

export default class ItemsList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('section_name', 'NO-NAME')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      // TODO: selectedItems will be replaced by query to backen
      items: items,
      selectedItems: []
    };
  }

  _renderItem = ({ item }) => (
    <SectionItem
      name={item.name}
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

  componentDidMount() {
    const { navigation } = this.props;
    const chosen_id = navigation.getParam('section_id', 'NO-ID');
    var sectionItems = [];
    const allItems = this.state.items;
    for (var i = 0; i < allItems.length; i++) {
      if (allItems[i].section_id == chosen_id) {
        sectionItems.push(allItems[i]);
      }
    }
    this.setState({ selectedItems: sectionItems });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.selectedItems}
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
