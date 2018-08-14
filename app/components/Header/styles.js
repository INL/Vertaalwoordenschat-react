import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: StatusBar.currentHeight,
    right: 0,
    backgroundColor: '$primaryColor',
    height: 50,
  },
  title: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 32,
  },
});
