import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

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
  // $outline: 1,
});

export default () => <Home />;