import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '$primaryColor',
    height: 150,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    $outline: 1,
  },
  logoIVDNT: {
    // flex: 2,
    height: 100,
    width: '50%',
  },
  logoVWS: {
    // flex: 1,
    height: 100,
    width: '25%',
  },
  titleContainer: {

  },
  title: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 32,
  },
});
