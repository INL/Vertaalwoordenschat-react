import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import styles from './styles';

const Content = ({ children }) => {

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {children}
    </ScrollView>
  );
}

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
