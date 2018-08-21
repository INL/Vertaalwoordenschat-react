import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, TouchableHighlight,
} from 'react-native';
import color from 'color';

import styles from './styles';
import IonIcon from '../Icon/IonIcon';

const ICON_SIZE = 23;
const ICON_COLOR = '#333333';

const InputToolbar = ({ dictionaryPress, searchPress, onChangeText }) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableHighlight
          onPress={dictionaryPress}
          style={styles.buttonContainerLeft}
          underlayColor={underlayColor}
        >
          <IonIcon name="arrow-dropdown" size={ICON_SIZE} color={ICON_COLOR} />
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
        />
        <View style={styles.separator} />
        <TouchableHighlight
          onPress={searchPress}
          style={styles.buttonContainerRight}
          underlayColor={underlayColor}
        >
          <IonIcon name="search" size={ICON_SIZE} color={ICON_COLOR} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

InputToolbar.propTypes = {
  dictionaryPress: PropTypes.func,
  searchPress: PropTypes.func,
  onChangeText: PropTypes.func,
};

export default InputToolbar;
