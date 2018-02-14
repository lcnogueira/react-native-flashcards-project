import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import MyButton from './MyButton';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { black } from '../utils/colors';
import MyText from './MyText';
import { FormInput, FormValidationMessage } from 'react-native-elements';

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
        <MyText>What is the title of your new Deck?</MyText>
        <FormInput
          onChangeText={this.handleDeckTitle}
          value={deckTitle} 
          placeholder='Enter the deck title here...'
          inputStyle={{textAlign: 'center', fontSize: 18}}
        />
        {deckTitleError && (
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        )}
        <MyButton
          onPress={this.submit}
          addStyle={{backgroundColor:black, marginTop: 30}} 
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