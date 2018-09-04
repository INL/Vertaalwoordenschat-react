import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import TranslationContainer from '../components/Container/TranslationContainer';
import Header from '../components/Header/Header';
import InputToolbar from '../components/InputToolbar/InputToolbar';
import Content from '../components/Content/Content';
import DictionaryModal from '../components/Modal/DictionaryModal';
import DictionaryButton from '../components/Button/DictionaryButton';
import SearchResultButton from '../components/Button/SearchResultButton';
import Message from '../components/Text/Message';

import {
  changeCurrentDictionary,
  switchModalVisibility,
  setQuery,
  searchVwsApi,
  getTranslation,
  IS_FETCHING,
  SHOW_SEARCH_RESULT,
  SHOW_TRANSLATION,
  SHOW_NO_RESULT_FOUND,
  SHOW_ERROR_MESSAGE,
} from '../actions/dictionaries';

// TODO: put is list in a separate fil in config?
const DICTIONARY_LIST = ['Nieuwgrieks', 'Portugees'];

class Home extends Component {
  static propTypes = {
    isModalVisible: PropTypes.bool,
    currentDictionary: PropTypes.string,
    query: PropTypes.string,
    searchResult: PropTypes.array,
    translationResult: PropTypes.string,
    contentController: PropTypes.string,
  };

  handleChangeText = (dataFromInput) => {
    const { dispatch } = this.props;
    dispatch(setQuery(dataFromInput));
  };

  handleSearchPress = () => {
    const { dispatch, currentDictionary } = this.props;

    if (currentDictionary === '') {
      this.toggleModal();
    } else {
      dispatch(searchVwsApi());
    }   
  }

  handleResultButtonPress = (term) => {
    const { dispatch } = this.props;
    dispatch(getTranslation(term));
  }

  setDictionary = (dictionary) => {
    const { dispatch } = this.props;
    dispatch(changeCurrentDictionary(dictionary));
    this.toggleModal();
  }

  toggleModal = () => {
    const { dispatch } = this.props;
    dispatch(switchModalVisibility());
  }

  render() {
    const {
      currentDictionary,
      query,
      isModalVisible,
      searchResult,
      translationResult,
      contentController,
    } = this.props;

    let buttonGroup = [];

    if (isModalVisible) {
      for(let idx = 0; idx < DICTIONARY_LIST.length; idx++) {
        buttonGroup.push(
          <DictionaryButton 
            dictionary={DICTIONARY_LIST[idx]}
            key={DICTIONARY_LIST[idx]}
            setDictionary={this.setDictionary}
            active={DICTIONARY_LIST[idx] === currentDictionary ? true : false }
          />
        )
      }
    }

    // render here resultContainer, messageContainer or translationContainer
    let content = [];

    switch (contentController) {
      case IS_FETCHING:
        content = <Message message={'...'} />;
        break;
      case SHOW_SEARCH_RESULT:
        content = [];
        searchResult.forEach((lemma, index) => {
          content.push(
            <SearchResultButton
              lemma={lemma}
              getTranslation={this.handleResultButtonPress}
              key={index.toString()}
            />
          )
        });
        break;
      case SHOW_TRANSLATION:
        // TODO: show html in a WebView component
        // content = <Message message={'translation in development'} />;
        content = <TranslationContainer translationHtml={translationResult} />;
        break;
      case SHOW_NO_RESULT_FOUND:
        content = <Message message={`Geen resultaat gevonden voor ${query} in het woordenboek`}/>;
        break;
      case SHOW_ERROR_MESSAGE:
        content = <Message message={'Er is iets fout gegaan'} />;
        break;
    }

    return (
      <Container>
        <StatusBar
          translucent={false} 
          backgroundColor="#ff8000"  
          barStyle="light-content" />
        <Header />
        <InputToolbar
          onChangeText={this.handleChangeText}
          dictionaryPress={this.toggleModal}
          searchPress={this.handleSearchPress}
        />
        <DictionaryModal
          isVisible={isModalVisible}
          closeModal={this.toggleModal}
        >
          { buttonGroup }
        </DictionaryModal>
        <Content children={content} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    currentDictionary,
    query,
    isModalVisible,
    searchResult,
    translationResult,
    contentController,
  } = state.dictionaries;

  return {
    currentDictionary,
    query,
    isModalVisible,
    searchResult,
    translationResult,
    contentController,
  };
};

export default connect(mapStateToProps)(Home);
