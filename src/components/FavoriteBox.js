import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors } from '../styles/colors';

export default class FavoriteBox extends Component {
  render() {
    const { isFavorite, onIconPress } = this.props;
    return (
      <CheckBox
        title="Favorite"
        checkedIcon="heart"
        uncheckedIcon="heart-outlined"
        iconType="entypo"
        size={30}
        checkedColor={colors.main}
        checked={isFavorite}
        containerStyle={styles.CheckBoxContainer}
        textStyle={styles.CheckBoxText}
        onIconPress={onIconPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  CheckBoxContainer: {
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  CheckBoxText: {
    display: 'none'
  }
});
