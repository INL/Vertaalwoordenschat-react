import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';

import styles from './styles';

const InputToolbar = (props) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>WB</Text>
      </TouchableHighlight>
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>ZKN</Text>
      </TouchableHighlight>
    </View>
  );
};

InputToolbar.propTypes = {
  onPress: PropTypes.func,
};

export default InputToolbar;
