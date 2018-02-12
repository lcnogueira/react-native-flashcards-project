import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import MyButton from './MyButton';
import MyInputText from './MyInputText';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { black } from '../utils/colors';
import MyText from './MyText';

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
      //FIXME: To Avoid the keyboard to pop up over the buttons 
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <MyText>What is the title of your new Deck?</MyText>
        <MyInputText
          onChangeText={this.handleDeckTitle}
          placeholder='Deck Title'
          showRequiredError={deckTitleError}
          addStyle={{margin: 40}}
        >
          {deckTitle}
        </MyInputText>
        <MyButton
          onPress={this.submit}
          addStyle={{backgroundColor:black}} 
        >
          Create Deck
        </MyButton>
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