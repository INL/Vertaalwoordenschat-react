import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '$primaryColor',
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  logoIVDNT: {
    //flex: 2,
    height: 100,
    width: 200,
  },
  logoVWS: {
    //flex: 1,
    height: 100,
    width: 100,
  },
  titleContainer: {

  },
  title: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 32,
  },
});
