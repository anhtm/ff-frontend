import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from 'native-base';
import { sections } from '../../../helpers/expiryStatus';
import { greyscale } from '../../../styles/colors';
import { formatDataIntoLabels } from '../../../helpers/metrics';
import _ from 'lodash';

export default class SectionPicker extends Component {
  _renderSections = () => {
    const { result } = this.props;
    return result.map(section => (
      <Picker.Item key={section.id} label={section.name} value={section.id} />
    ));
  };

  render() {
    const { section_id, onValueChange } = this.props;
    return (
      <Picker
        style={styles.Picker}
        iosHeader="Select one"
        mode="dialog"
        selectedValue={section_id}
        onValueChange={onValueChange}
      >
        {this._renderSections()}
      </Picker>
    );
  }
}

let width = 150;
const styles = StyleSheet.create({
  Picker: {
    backgroundColor: greyscale.lightShade,
    borderRadius: 5,
    borderColor: greyscale.darkShade,
    width: width
  }
});
