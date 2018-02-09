import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import MyButton from './MyButton';
import MyInputText from './MyInputText';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { blue } from '../utils/colors';

class AddDeckView extends Component {
  state = { 
    deckTitle: '',
    deckTitleError: false,
  };

  handleDeckTitle = (deckTitle) => {
    this.setState(() => ({ 
      deckTitle, 
      deckTitleError: (deckTitle === '' ? true : false) 
    }));
  };

  submit = () => {
    const { deckTitle, deckTitleError } = this.state;

    if(deckTitle === ''){
      this.setState({deckTitleError: true});
    }else {

      //Save the deck in AsyncStorage
      saveDeckTitle(deckTitle);

      //Dispacth action to update the store
      this.props.dispatch(addDeck({
        [deckTitle]: {
          title: deckTitle,
          questions: []
        }
      }));

      //Hide the keyboard before mounting the AddCard component
      Keyboard.dismiss();

      //Navigate to DeckView component
      this.props.navigation.navigate('DeckView',{ deckTitle });

      //Clear inputText
      this.setState({
        deckTitle: ''
      });
    }
  }

  render(){
    const { deckTitle, deckTitleError } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <MyInputText
          value={deckTitle}
          onChangeText={this.handleDeckTitle}
          placeholder='Deck Title'
          showRequiredError={deckTitleError}
        >
        </MyInputText>
        <MyButton onPress={this.submit} label={'Create Deck'} backgroundColor={blue} />
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
});

export default connect()(AddDeckView);