import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { sections } from '../config/data';
import { Picker, Form } from 'native-base';
import CustomInput from '../components/CustomTextInput';
import DatePicker from 'react-native-datepicker';
import { greyscale } from '../styles/colors';

export default class AddItemForm extends Component {
  _renderSections = () => {
    return sections.map(section => (
      <Picker.Item key={section.id} label={section.name} value={section.id} />
    ));
  };

  formatDate = date => {
    return date.toString();
  };

  render() {
    const { setParentState, section_id, date_added, name } = this.props;
    return (
      <Form>
        <CustomInput
          label="Name"
          placeholder="ie: Frozen bananas"
          onChange={text => setParentState({ name: text })}
        />

        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={section_id}
          onValueChange={section_id => setParentState({ section_id })}
        >
          {this._renderSections()}
        </Picker>

        <DatePicker
          date={date_added}
          style={styles.DatePicker}
          customStyles={CustomStyles}
          format="YYYY-MM-DD"
          mode="date"
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2025, 12, 31)}
          androidMode={'spinner'}
          placeholder="Select Date"
          onDateChange={date_added => setParentState({ date_added })}
        />
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  DatePicker: {
    width: 200,
    marginLeft: 10
  }
});

const CustomStyles = {
  dateIcon: {
    display: 'none'
  },
  dateInput: {
    borderColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  dateText: {
    color: greyscale.darkAccent
  }
};
