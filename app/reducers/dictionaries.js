import {
  CHANGE_CURRENT_DICTIONARY,
  SWITCH_MODAL_VISIBILITY,
  SET_CONTENT,
  SET_QUERY,
} from '../actions/dictionaries';

const initialState = {
  content: 'content komt hier',
  isModalVisible: false,
  currentDictionary: '',
  query: '',
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
    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default reducer;
