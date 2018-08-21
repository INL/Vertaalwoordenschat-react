import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const IonIcon = ({ name, size, color, outline }) => {
  let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
  if (Platform.OS === 'ios' && outline) {
    iconName = `${iconName}-outline`;
  }
  return <Icon name={iconName} size={size} color={color} />;
};

IonIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  outline: PropTypes.string,
};

export default IonIcon;
