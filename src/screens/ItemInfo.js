import 'whatwg-fetch';
import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ItemInfoDetails from '../components/ItemInfoDetails';
import { toCapital } from '../helpers/toCapital';
import { backend } from '../config/urls';
import { deleteDataWithToken } from '../authentication/requests';
import { getToken } from '../authentication/auth';
import { getFoodItem } from '../helpers/fetchDataset';
import { greyscale } from '../styles/colors';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { alert } from '../helpers/alerts';

export default class ItemInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    const { save } = navigation.state.params || {};
    return {
      title: toCapital(navigation.getParam('item', 'no-item').name),
      headerRight:
        save === undefined ? null : (
          <CustomButton
            iconName={'trash-2'}
            iconType={'feather'}
            onPress={save}
          />
        )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam('item', 'no-item'),
      food_info: {},
      error: null
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({ save: this._delete });
  }

  componentDidMount() {
    this.getFoodInfo();
  }

  _delete = () => {
    let path = backend + 'item/' + this.state.item.id;
    getToken().then(token => {
      fetch(path, deleteDataWithToken(token))
        .then(res => {
          if (res.ok) {
            return res;
          }
        })
        .then(() => {
          alert('Item has been deleted', null);
          this.props.navigation.navigate('SectionsList');
        })
        .catch(error => {
          this.setState(
            { error },
            alert('There is an error', this.state.error)
          );
        });
    });
  };

  getFoodInfo = () => {
    const food_id = this.state.item.food_id;
    getFoodItem(food_id)
      .then(item => {
        this.setState({ food_info: item });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <ItemInfoDetails
          item={this.state.item}
          food_info={this.state.food_info}
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
