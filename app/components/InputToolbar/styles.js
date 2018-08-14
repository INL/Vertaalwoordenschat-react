import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$lightGray',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    alignItems: 'center',
    width: '90%',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    fontSize: 18,
  },
  buttoncontainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$lightGray',
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
});
