import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.logoIVDNT}
        source={require('./images/ivdnt-logo-3regels.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.logoVWS}
        source={require('./images/vws-logo.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Vertaalwoordenschat</Text>
    </View>
  </View>
);

export default Header;
