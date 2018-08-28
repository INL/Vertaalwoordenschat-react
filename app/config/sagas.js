import { takeEvery } from 'redux-saga/effects';

import { SEARCH_VWS_API } from '../actions/dictionaries';

function* fetchSearchResult(action) {
  console.log('TODO: implement api search', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_VWS_API, fetchSearchResult);
}