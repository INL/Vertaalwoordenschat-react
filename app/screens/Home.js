import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputToolbar from '../components/InputToolbar/InputToolbar';
import Content from '../components/Content/Content';
import DictionaryModal from '../components/Modal/DictionaryModal';
import DictionaryButton from '../components/Button/DictionaryButton';

const DICTIONARY_LIST = ['Niewgrieks', 'Portugees', 'Estisch'];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'content komt hier',
      isModalVisible: false,
      currentDictionary: '',
    };
  }

  handleChangeText = (dataFromInput) => {
    this.setState({
      content: dataFromInput,
    });
  };

  handleDictionaryPress = () => {
    this.setState({
      content: 'dictionary pressed',
      isModalVisible: !this.state.isModalVisible
    });
  }

  handleSearchPress = () => {
    this.setState({
      content: 'search pressed',
    });
  }

  setDictionary = (dictionary) => {
    this.setState({
      content: `dictionary chosen: ${dictionary}`,
      currentDictionary: `${dictionary}`,
      isModalVisible: !this.state.isModalVisible,
    });
  }

  toggleModal = () => {
    this.setState({ 
      isModalVisible: !this.state.isModalVisible 
    });
  }
    

  render() {
    const { content, currentDictionary } = this.state;

    var buttonGroup = [];

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

    return (
      <Container>
        <StatusBar
          translucent={false} 
          backgroundColor="#ff8000"  
          barStyle="light-content" />
        <Header />
        <InputToolbar
          onChangeText={this.handleChangeText}
          dictionaryPress={this.handleDictionaryPress}
          searchPress={this.handleSearchPress}
        />
        <DictionaryModal
          isVisible={this.state.isModalVisible}
          closeModal={this.toggleModal}
        >
          { buttonGroup }
        </DictionaryModal>
        <Content content={content} />
      </Container>
    );
  }
}

export default Home;
