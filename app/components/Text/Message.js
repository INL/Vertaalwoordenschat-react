import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

export default Message = ({ message }) => (
    <View>
        <Text style={styles.text}>{message}</Text>
    </View>
    
);

Message.propTypes = {
  message: PropTypes.string,
};