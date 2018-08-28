export const CHANGE_CURRENT_DICTIONARY = 'CHANGE_CURRENT_DICTIONARY';
export const SWITCH_MODAL_VISIBILITY = 'SWITCH_MODAL_VISIBILITY';
export const SET_CONTENT = 'SET_CONTENT';
export const SEARCH_VWS_API = 'SEARCH_VWS_API';
export const SET_QUERY = 'SET_QUERY';

export const changeCurrentDictionary = dictionary => ({
  type: CHANGE_CURRENT_DICTIONARY,
  dictionary: dictionary,
});

export const switchModalVisibility = () => ({
  type: SWITCH_MODAL_VISIBILITY,
});

export const setContent = content => ({
  type: SET_CONTENT,
  content: content,
});

export const setQuery = query => ({
  type: SET_QUERY,
  query: query,
});

export const searchVwsApi = () => ({
  type: SEARCH_VWS_API,
});
