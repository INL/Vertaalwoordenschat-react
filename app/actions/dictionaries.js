export const CHANGE_CURRENT_DICTIONARY = 'CHANGE_CURRENT_DICTIONARY';
export const SWITCH_MODAL_VISIBILITY = 'SWITCH_MODAL_VISIBILITY';
export const SEARCH_VWS_API = 'SEARCH_VWS_API';
export const SET_QUERY = 'SET_QUERY';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const NO_SEARCH_RESULT = 'NO_SEARCH_RESULT';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const GET_TRANSLATION = 'GET_TRANSLATION';
export const TRANSLATION_RESULT = 'TRANSLATION_RESULT';
export const IS_FETCHING = 'IS_FETCHING';
export const SHOW_SEARCH_RESULT = 'SHOW_SEARCH_RESULT';
export const SHOW_TRANSLATION = 'SHOW_TRANSLATION';
export const SHOW_NO_RESULT_FOUND = 'SHOW_NO_RESULT_FOUND';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'; 

export const changeCurrentDictionary = dictionary => ({
  type: CHANGE_CURRENT_DICTIONARY,
  dictionary: dictionary,
});

export const switchModalVisibility = () => ({
  type: SWITCH_MODAL_VISIBILITY,
});

export const setQuery = query => ({
  type: SET_QUERY,
  query,
});

export const searchVwsApi = () => ({
  type: SEARCH_VWS_API,
});

export const searchResult = result => ({
  type: SEARCH_RESULT,
  result
});

export const noSearchResult = () => ({
  type: NO_SEARCH_RESULT,
});

export const searchError = () => ({
  type: SEARCH_ERROR,
  error,
});

export const getTranslation = term => ({
  type: GET_TRANSLATION,
  term,
});

export const translationResult = result => ({
  type: TRANSLATION_RESULT,
  result
});
