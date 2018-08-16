import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '$primaryColor',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 32,
  },
});
