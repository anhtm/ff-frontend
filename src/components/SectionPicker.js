import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from 'native-base';
import { sections } from '../config/data';
import { greyscale } from '../styles/colors';

export default class SectionPicker extends Component {
  _renderSections = () => {
    return sections.map(section => (
      <Picker.Item key={section.id} label={section.name} value={section.id} />
    ));
  };

  render() {
    const { section_id, onValueChange } = this.props;
    return (
      <Picker
        style={styles.Picker}
        iosHeader="Select one"
        mode="dropdown"
        selectedValue={section_id}
        onValueChange={onValueChange}
      >
        {this._renderSections()}
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  Picker: {
    backgroundColor: greyscale.lightShade,
    borderRadius: 5
  }
});
