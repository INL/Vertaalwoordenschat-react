import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default DictionaryButton = ({ dictionary, setDictionary, active }) => (
  <TouchableOpacity onPress={() => setDictionary(dictionary)} style={styles.touchable}>
    <View style={[styles.button, active ? styles.buttonActive : styles.buttonInactive]}>
      <Text style={styles.text}>Nederlands - {dictionary}</Text>
    </View>
  </TouchableOpacity>
);

DictionaryButton.propTypes = {
  dictionary: PropTypes.string,
  setDictionary: PropTypes.func,
  active: PropTypes.bool,
};