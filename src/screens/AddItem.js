import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddItemForm from '../components/AddItemForm';
import { greyscale } from '../styles/colors';
import { Button } from 'react-native-elements';
import { sendDataWithToken } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import { getToken } from '../authentication/auth';

export default class AddItem extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Adding ${navigation.getParam('item', 'no-item').name}`
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      section_id: 1,
      date_added: new Date(),
      name: this.props.navigation.getParam('item', '').name,
      error: null
    };
  }

  _onSubmit = () => {
    const { name, section_id, date_added } = this.state;
    let info = {
      name,
      section_id,
      date_added,
      food_id: this.props.navigation.getParam('item', '').id
    };

    console.log(info);

    getToken().then(token => {
      fetch(backend + 'item', sendDataWithToken(info, token))
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
        })
        .catch(error => {
          this.setState({ error });
        });
    });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <AddItemForm
          setParentState={newState => this.setState(newState)}
          section_id={this.state.section_id}
          date_added={this.state.date_added}
          name={this.state.name}
        />
        <Button title="Add Item" onPress={this._onSubmit} />
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
