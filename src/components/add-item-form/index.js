import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { greyscale, colors } from '../../styles/colors';
import CustomInput from '../CustomTextInput';
import FavoriteBox from './inputs/FavoriteBox';
import SectionPicker from './inputs/SectionPicker';
import DatePickerItem from './inputs/DatePickerItem';

export default class AddItemForm extends Component {
  render() {
    const {
      setParentState,
      section_id,
      date_added,
      name,
      isFavorite
    } = this.props;

    return (
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>New Item</Text>
          </View>
          <View style={styles.inputWrapper}>
            <CustomInput
              label={name}
              placeholder="ie: Frozen bananas"
              onChange={text => setParentState({ name: text })}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Select Section</Text>
          </View>
          <View style={styles.inputWrapper}>
            <SectionPicker
              section_id={section_id}
              onValueChange={section_id => setParentState({ section_id })}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Select Date</Text>
          </View>
          <View style={styles.inputWrapper}>
            <DatePickerItem
              date_added={date_added}
              onDateChange={date_added => setParentState({ date_added })}
            />
          </View>
        </View>

        <FavoriteBox
          isFavorite={isFavorite}
          onIconPress={() => setParentState({ isFavorite: !isFavorite })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: greyscale.darkAccent,
    paddingVertical: 15,
    fontSize: 15
  },
  fieldContainer: {
    flexDirection: 'column',
    borderTopColor: 'transparent',
    borderBottomColor: greyscale.lightAccent,
    height: 90,
    paddingHorizontal: 25
  },
  form: {
    flex: 1
  },
  textWrapper: {
    flex: 1
  },
  inputWrapper: {
    flex: 5,
    paddingVertical: 30
  }
});
