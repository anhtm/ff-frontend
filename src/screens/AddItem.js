import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import AddItemForm from '../components/add-item-form/index';
import { greyscale } from '../styles/colors';
import { Button, Overlay } from 'react-native-elements';
import { sendDataWithToken } from '../authentication/requests';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import { getToken } from '../authentication/auth';
import { toCapital } from '../helpers/toCapital';

export default class AddItem extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Adding ${navigation.getParam('item', 'no-item').name}`
      // headerRight: // (<FavoriteBox
      //   isFavorite={this.state.isFavorite}
      //   setParentState={(newState = null) => this.setState(newState)}
      // />)
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      section_id: 1,
      date_added: new Date(),
      name: this.props.navigation.getParam('item', '').name,
      error: null,
      isFavorite: false,
      isSuccess: true,
      expiry_info: this.props.navigation.getParam('expiry_info', '')
    };
  }

  _onSubmit = () => {
    const { name, section_id, date_added, isFavorite } = this.state;
    let info = {
      name,
      section_id,
      date_added,
      food_id: this.props.navigation.getParam('item', '').id,
      isFavorite
    };

    console.log(info);

    getToken().then(token => {
      fetch(backend + 'item', sendDataWithToken(info, token))
        .then(res => {
          return res.json();
        })
        .then(result => {
          console.log(result);
          this.showAlert(
            'A new item has been created',
            toCapital(result.name),
            'OK'
          );
        })
        .catch(error => {
          this.setState({ error });
        });
    });
  };

  showAlert = (title, msg, action = 'OK') => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: action,
          onPress: () => this.props.navigation.navigate('Search')
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    console.log(this.state);
    const {
      section_id,
      date_added,
      name,
      isFavorite,
      expiry_info
    } = this.state;
    return (
      <View style={styles.container}>
        <AddItemForm
          setParentState={(newState = null) => this.setState(newState)}
          section_id={section_id}
          date_added={date_added}
          name={name}
          isFavorite={isFavorite}
          expiry_info={expiry_info}
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
