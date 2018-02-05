import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import SubmitBtn from './SubmitBtn';
import MyInputText from './MyInputText';
import { saveDeckTitle } from '../utils/api';

class AddDeck extends Component {
  state = { 
    deckTitle: '' 
  };

  handleDeckTitle = (deckTitle) => {
    this.setState(() => ({ deckTitle }));
  };

  submit = () => {
    saveDeckTitle(this.state.deckTitle);

    //TODO: dispatch action to updade store

    //TODO: navigate to DeckView component

    //Clear inputText
    this.setState({
      deckTitle: ''
    });

    //Clear local notification
  }

  render(){
    const { deckTitle } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <MyInputText
          value={deckTitle}
          onChangeText={this.handleDeckTitle}
          placeholder='Deck Title'
        >
        </MyInputText>
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default AddDeck;