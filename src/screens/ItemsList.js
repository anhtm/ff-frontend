import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'whatwg-fetch';
import { backend } from '../config/urls';
import { dataWithToken } from '../authentication/requests';
import { getToken } from '../authentication/auth';
import ItemsListDetails from '../components/ItemsListDetails';

export default class ItemsList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('section_name', 'NO-NAME')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null
    };
  }

  fetchItems = () => {
    const section_id = this.props.navigation.getParam('section_id', 'NO-ID');
    const path = `${backend}items/section/${section_id}`;
    getToken().then(token => {
      fetch(path, dataWithToken(token))
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.setState({ items: json });
        })
        .catch(error => {
          this.setState({ error });
        });
    });
  };

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    console.log(this.state);
    if (!this.state.error) {
      return (
        <ItemsListDetails
          navigation={this.props.navigation}
          data={this.state.items}
        />
      );
    }
  }
}

const styles = StyleSheet.create({});
