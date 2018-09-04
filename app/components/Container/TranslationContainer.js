import React from 'react';
// import { WebView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import PropTypes from 'prop-types';

import styles from './styles';

const TranslationContainer = ({ translationHtml }) => (
  <HTMLView
    value={translationHtml}
  />
);

TranslationContainer.propTypes = {
  translation: PropTypes.string,
};

export default TranslationContainer;
