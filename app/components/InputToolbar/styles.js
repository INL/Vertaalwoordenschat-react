import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
const BUTTON_WIDTH = 50;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$lightGray',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '$primaryColor',
  },
  toolbar: {
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
  buttonContainerRight: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$lightGray',
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    width: BUTTON_WIDTH,
  },
  buttonContainerLeft: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$lightGray',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    width: BUTTON_WIDTH,
  },
  separator: {
    height: INPUT_HEIGHT,
    width: 1,
    backgroundColor: '$border',
  },
});
