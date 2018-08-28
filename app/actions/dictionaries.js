export const CHANGE_CURRENT_DICTIONARY = 'CHANGE_CURRENT_DICTIONARY';
export const SWITCH_MODAL_VISIBILITY = 'SWITCH_MODAL_VISIBILITY';
export const SET_CONTENT = 'SET_CONTENT';

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