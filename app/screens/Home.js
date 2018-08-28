import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputToolbar from '../components/InputToolbar/InputToolbar';
import Content from '../components/Content/Content';
import DictionaryModal from '../components/Modal/DictionaryModal';
import DictionaryButton from '../components/Button/DictionaryButton';

import {
  changeCurrentDictionary,
  setContent,
  switchModalVisibility,
  setQuery,
  searchVwsApi,
} from '../actions/dictionaries';

// TODO: put is list in a separate fil in config?
const DICTIONARY_LIST = ['Niewgrieks', 'Portugees', 'Estisch'];

class Home extends Component {
  static propTypes = {
    content: PropTypes.string,
    isModalVisible: PropTypes.bool,
    currentDictionary: PropTypes.string,
  };

  handleChangeText = (dataFromInput) => {
    const { dispatch } = this.props;
    dispatch(setQuery(dataFromInput));
  };

  handleSearchPress = () => {
    const { dispatch } = this.props;
    dispatch(searchVwsApi());
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
      isModalVisible,
      content, 
    } = this.props;

    var buttonGroup = [];

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
        <Content content={content} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    currentDictionary,
    isModalVisible,
    content
  } = state.dictionaries;

  return {
    currentDictionary,
    isModalVisible,
    content,
  };
};

export default connect(mapStateToProps)(Home);
