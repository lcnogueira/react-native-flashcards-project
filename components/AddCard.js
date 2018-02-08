import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import MyInputText from './MyInputText';
import MyButton from './MyButton';
import { black } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';

class AddCard extends Component {
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

      //Hide the keyboard before back to the DeckView component
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
        <MyInputText 
          value={question}
          onChangeText={this.handleQuestion}
          placeholder={'Type the question here...'}
          showRequiredError={questionError}
        />
        <MyInputText 
          value={answer}
          onChangeText={this.handleAnswer}
          placeholder={'Type the answer here...'}
          showRequiredError={answerError}
        />
        <MyButton 
          onPress={this.submit}
          label={'Submit'}
          backgroundColor={black}
        />
      </KeyboardAvoidingView>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

const mapStateToProps = (decks, { navigation }) => ({
  deckTitle: navigation.state.params.deckTitle,
  goBack: () => navigation.goBack(),
})

export default connect(mapStateToProps)(AddCard);