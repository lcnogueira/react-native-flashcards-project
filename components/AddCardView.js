import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import MyButton from './MyButton';
import { black } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';
import { FormInput, FormValidationMessage } from 'react-native-elements';

class AddCardView extends Component {
  state = {
    question: '',
    questionError: false,
    answer: '',
    answerError: false,
  };

  submit = () => {
    const { question, questionError, answer, answerError } = this.state;
    const { deckTitle, goBack } = this.props;

    if(question === '' || answer === ''){
      
      this.setState({
        questionError: (question === '' ? true : false),
        answerError: (answer === '' ? true : false),
      });

    }else {

      card = {
        question,
        answer,
      };

      //Save the card in AsyncStorage
      addCardToDeck(deckTitle, card);

      //Dispacth action to update the store
      this.props.dispatch(addCard(deckTitle, card));

      //Hide the keyboard before navigating to the DeckView component
      Keyboard.dismiss();

      //Navigate to DeckView component
      goBack();

      //Clear inputText
      this.setState({
        question: '',
        answer: '',
      });
    }
  }

  handleQuestion = (question) => this.setState({ question, questionError: (question === '' ? true : false) });

  handleAnswer = (answer) => this.setState({ answer, answerError: (answer === '' ? true : false) });

  render(){
    const { deckTitle } = this.props;
    const { question, questionError, answer, answerError } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <FormInput
          onChangeText={this.handleQuestion}
          value={question} 
          placeholder='Enter the question here...'
          inputStyle={{textAlign: 'center', fontSize: 18}}
          containerStyle={{marginTop: 30}}
        />
        {questionError && (
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        )}
        <FormInput
          onChangeText={this.handleAnswer}
          value={answer} 
          placeholder='Enter the answer here...'
          inputStyle={styles.input}
          containerStyle={{marginTop: 30}}
        />
        {answerError && (
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        )}
        <MyButton onPress={this.submit} addStyle={{margin: 20, backgroundColor:black}}>
          Submit
        </MyButton>
      </KeyboardAvoidingView>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: { 
    textAlign: 'center', 
    fontSize: 18,
  },
});

const mapStateToProps = (state, { navigation }) => ({
  deckTitle: navigation.state.params.deckTitle,
  goBack: () => navigation.goBack(),
})

export default connect(mapStateToProps)(AddCardView);