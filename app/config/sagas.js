import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
  SEARCH_VWS_API,
  SEARCH_RESULT,
  NO_SEARCH_RESULT,
  SEARCH_ERROR,
  GET_TRANSLATION,
  TRANSLATION_RESULT
} from '../actions/dictionaries';

// TODO: switch back to ato and https if it works again
const getSearchResult = (dictionary, query) => 
  fetch(`http://vertaalwoordenschat.ivdnt.org/vws/api/lemma/search?languages[]=Nederlands&languages[]=${dictionary}&lemma=${query}&autocomplete=false`);

const getTranslation = (dictionary, query) =>
  fetch(`http://vertaalwoordenschat.ivdnt.org/vws/api/lemma?dictionary=Nederlands-${dictionary}&lemma=${query}&fullPage=false`);

function* fetchSearchResult() {
  // TODO: this function now also works as a controller, refactor?  
  try {
    let dictionary = yield select(state => state.dictionaries.currentDictionary);
    let query = yield select(state => state.dictionaries.query);

    const response = yield call(getSearchResult, dictionary, query);

    if (response.status === 204) {
      yield put({
        type: NO_SEARCH_RESULT,
        query
      });
    } else {
      const result = yield response.json();
      if (result.length === 1) {
        yield put({
          type: GET_TRANSLATION,
        });
      } else {
        yield put({
        type: SEARCH_RESULT,
        result
      });
      }  
    }
  } catch (e) {
    yield put({
      type: SEARCH_ERROR,
      error: e.message,
    });
  }
}

function* fetchTranslation() {
  try{
    let dictionary = yield select(state => state.dictionaries.currentDictionary);
    let query = yield select(state => state.dictionaries.query);

    const response = yield call(getTranslation, dictionary, query);
    const result = yield response.json();

    yield put({
      type: TRANSLATION_RESULT,
      result
    });     
  } catch (e) {
    yield put({
      type: SEARCH_ERROR,
      error: e.message,
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_VWS_API, fetchSearchResult);
  yield takeEvery(GET_TRANSLATION, fetchTranslation);
}