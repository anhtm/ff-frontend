import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
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
      isFavorite,
      expiry_info,
      result
    } = this.props;

    return (
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <View style={styles.textWrapper}>
            <Icon
              iconStyle={styles.icon}
              name="food"
              type="material-community"
              size={20}
            />
            <CustomInput
              label={name}
              placeholder="ie: Frozen bananas"
              onChange={text => setParentState({ name: text })}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <View style={styles.textWrapper}>
              <Icon
                iconStyle={styles.icon}
                name="archive"
                type="entypo"
                size={20}
              />
              <Text style={styles.text}>Section</Text>
            </View>
            <View style={styles.inputWrapper}>
              <SectionPicker
                section_id={section_id}
                onValueChange={section_id => setParentState({ section_id })}
                expiry_info={expiry_info}
                result={result}
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <View style={styles.textWrapper}>
              <Icon
                iconStyle={styles.icon}
                name="stopwatch"
                type="entypo"
                size={20}
              />
              <Text style={styles.text}>Date</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1
  },
  icon: {
    paddingRight: 10
  },
  textWrapper: {
    flexDirection: 'row'
  },
  fieldContainer: {
    paddingVertical: 20
  },
  inputWrapper: {},
  form: {
    paddingHorizontal: 20,
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});
