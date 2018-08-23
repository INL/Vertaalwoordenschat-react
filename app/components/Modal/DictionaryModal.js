import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './styles';

export default DictionaryModal = ({ isVisible, closeModal, children }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0}
      onBackdropPress={closeModal}
      onSwipe={closeModal}
    >
      <View style={styles.modalContent}>
        { children }
      </View>
    </Modal>
  );
}

DictionaryModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.array,
};