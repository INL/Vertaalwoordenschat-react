import React from 'react';
import { StatusBar } from 'react-native';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputToolbar from '../components/InputToolbar/InputToolbar';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Header />
    <InputToolbar />
  </Container>
);
