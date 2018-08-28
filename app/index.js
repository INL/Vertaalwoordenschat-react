import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import store from './config/store';

EStyleSheet.build({
  $primaryColor: '#ff8000',
  $secondaryColor: '#fff0e0',
  $secondaryAccent: '#ffe0c2',
  $secondaryAccent2: '#ffd1a3',
  $danger: '#f53d3d',
  $link: '#000',
  $light: '#FFEFDF',
  $mid: '#FFE0C1',
  $dark: '#ff8000',
  $white: '#ffffff',
  $lightGray: '#eeeeee',
  $border: '#E2E2E2',
  $black: '#000000',
  // $outline: 1,
});

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
