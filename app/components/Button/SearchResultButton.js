import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default SearchResultButton = ({ lemma, getTranslation }) => (
  <TouchableOpacity onPress={() => getTranslation(lemma.lemma)} style={styles.touchable}>
    <View style={styles.result}>
      <Text style={styles.lemma}>
          <Text style={styles.ball} />
          <Text style={styles.word}>{lemma.lemma}</Text>
          <Text style={styles.flag} />
      </Text>
    </View>
  </TouchableOpacity>
);

SearchResultButton.propTypes = {
  searchResult: PropTypes.object,
  getTranslation: PropTypes.func,
};