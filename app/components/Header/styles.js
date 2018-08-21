import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$primaryColor',
    height: 150,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  logoIVDNT: {
    height: 100,
    width: 200,
  },
  logoVWS: {
    height: 100,
    width: 100,
  },
  titleContainer: {
    paddingTop: 10,
  },
  title: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 32,
    color: '$black',
  },
});
