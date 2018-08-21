import React, { Component } from 'react';
import { StatusBar, } from 'react-native';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputToolbar from '../components/InputToolbar/InputToolbar';
import Content from '../components/Content/Content';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'content komt hier',
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
    });
  }

  handleSearchPress = () => {
    this.setState({
      content: 'search pressed',
    });
  }

  render() {
    const { content } = this.state;

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
        <Content content={content} />
      </Container>
    );
  }
}

export default Home;
