import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddItemForm from '../components/AddItemForm';
import { greyscale } from '../styles/colors';

export default class AddItem extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Adding ${navigation.getParam('name', 'No-Name')}`
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      section_id: 1,
      date_added: new Date()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AddItemForm
          setParentState={newState => this.setState(newState)}
          section_id={this.state.section_id}
          date_added={this.state.date_added}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyscale.lightShade
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
