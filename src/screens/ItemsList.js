import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { items } from '../config/data';
import SectionItem from '../components/SectionItem';
import { toCapital } from '../helpers/toCapital';
import CustomButton from '../components/CustomButton';

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

  componentDidMount() {
    const chosen_id = this.props.navigation.getParam('section_id', 'NO-ID');
    let selectedItems = [];
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].section_id == chosen_id) {
        selectedItems.push(this.state.items[i]);
      }
    }
    this.setState({ selectedItems });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.selectedItems}
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
    backgroundColor: '#F5FCFF'
  }
});
