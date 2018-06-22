import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { greyscale } from '../../../styles/colors';
import DatePicker from 'react-native-datepicker';

export default class DatePickerItem extends Component {
  formatDate = date => {
    return date.toString();
  };

  render() {
    const { date_added, onDateChange } = this.props;
    return (
      <DatePicker
        date={date_added}
        style={styles.DatePicker}
        customStyles={CustomStyles}
        format="YYYY-MM-DD"
        mode="date"
        minDate={new Date(2018, 1, 1)}
        maxDate={new Date(2025, 12, 31)}
        androidMode={'spinner'}
        onDateChange={onDateChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  DatePicker: {
    width: 200
  }
});

const CustomStyles = {
  dateIcon: {
    display: 'none'
  },
  dateInput: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: greyscale.lightShade
  },
  dateText: {
    color: greyscale.darkAccent,
    paddingLeft: 20
  }
};
