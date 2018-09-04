import {
  CHANGE_CURRENT_DICTIONARY,
  SWITCH_MODAL_VISIBILITY,
  SET_QUERY,
  SEARCH_RESULT,
  NO_SEARCH_RESULT,
  SEARCH_ERROR,
  SEARCH_VWS_API,
  GET_TRANSLATION,
  TRANSLATION_RESULT,
  IS_FETCHING,
  SHOW_SEARCH_RESULT,
  SHOW_TRANSLATION,
  SHOW_NO_RESULT_FOUND,
  SHOW_ERROR_MESSAGE,
} from '../actions/dictionaries';

const initialState = {
  isModalVisible: false,
  currentDictionary: '',
  query: '',
  contentController: '',
  searchResult: [],
  translationResult: '',
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
    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case SEARCH_VWS_API:
      return {
      ...state,
      contentController: IS_FETCHING,
      };
    case GET_TRANSLATION:
      return {
        ...state,
        contentController: IS_FETCHING,
        query: action.term,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.result,
        translationResult: '',
        contentController: SHOW_SEARCH_RESULT,
      };
    case NO_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [],
        translationResult: '',
        contentController: SHOW_NO_RESULT_FOUND,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchResult: [],
        translationResult: '',
        contentController: SHOW_ERROR_MESSAGE,
      }
    case TRANSLATION_RESULT:
      return {
        ...state,
        searchResult: [],
        translationResult: action.result,
        contentController: SHOW_TRANSLATION,
      }
    default:
      return state;
  }
};

export default reducer;
