import {
  CHANGE_CURRENT_DICTIONARY,
  SWITCH_MODAL_VISIBILITY,
  SET_CONTENT,
} from '../actions/dictionaries';

const initialState = {
  content: 'content komt hier',
  isModalVisible: false,
  currentDictionary: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_DICTIONARY:
      return {
        ...state,
        currentDictionary: action.dictionary,
      };
    case SWITCH_MODAL_VISIBILITY:
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

export default reducer;
