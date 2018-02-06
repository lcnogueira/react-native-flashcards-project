import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import SubmitBtn from './SubmitBtn';
import MyInputText from './MyInputText';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class AddDeck extends Component {
  state = { 
    deckTitle: '' 
  };

  handleDeckTitle = (deckTitle) => {
    this.setState(() => ({ deckTitle }));
  };

  submit = () => {
    const { deckTitle } = this.state;

    saveDeckTitle(deckTitle);

    this.props.dispatch(addDeck({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    }));

    //Clear inputText
    this.setState({
      deckTitle: ''
    });

    //TODO: clear local notification

    //TODO: navigate to DeckView component
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

export default connect()(AddDeck);