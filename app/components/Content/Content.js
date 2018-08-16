import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';

import styles from './styles';

const Content = ({ content }) => (
  <ScrollView
    style={styles.scrollView}
    contentContainerStyle={styles.contentContainer}
  >
    <Text style={styles.text}>{content}</Text>
  </ScrollView>
);

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
