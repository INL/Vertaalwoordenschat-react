import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  touchable: {
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: BORDER_RADIUS,
  },
  buttonActive: {
    backgroundColor: '$primaryColor',
  },
  buttonInactive: {
    backgroundColor: '$white',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '$black',
    padding: 8,
    width: '100%',
  },
  touchableResult: {
    width: '80%',
    marginLeft: '10%',
  },
  result: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 40,
    paddingBottom: 5,
    backgroundColor: '$secondaryAccent',
  },
  lemma: {

  },
  ball: {

  },
  word: {
    fontSize: 50,
    fontWeight: '400',
    color: '$black',
  },
  flag: {

  },
});