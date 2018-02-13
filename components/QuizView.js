import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { red, green, blue, black } from '../utils/colors';
import { getCardNumberDesc, showResult } from '../utils/helpers';
import MyText from './MyText';
import MyButton from './MyButton';
import { NavigationActions } from 'react-navigation';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { addHistoryEntry } from '../actions';
import { saveHistoryEntry } from '../utils/api';

const TextButton = ({ children, onPress, addStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={addStyle}>{children}</Text>
  </TouchableOpacity>
);

class QuizView extends Component {
  initialState = {
    showQuestion: true,
    cardIndex: 0,
    correctAnswers: 0
  };

  state = {
    ...this.initialState
  };

  toggleQuestionAnswer = () => this.setState({ showQuestion: !this.state.showQuestion });

  showNewCard = () => this.setState({ showQuestion: true, cardIndex: ++this.state.cardIndex });

  correctAnswer = () => {
    this.setState({ correctAnswers: ++this.state.correctAnswers });
    this.showNewCard();
  };

  restartQuiz = () => this.setState({...this.initialState});

  backToDeck = () => this.props.navigation.dispatch(NavigationActions.back({
    key: null
  }));

  render(){
    const { deck } = this.props;
    const { showQuestion, cardIndex, correctAnswers } = this.state;
    
    //If it's true, then there's no card to show anymore
    if(cardIndex === deck.questions.length){

      const historyEntry = {
        deckTitle: deck.title,
        correctAnswers,
        questions: deck.questions.length,
        date: (new Date()).toLocaleDateString(),
      };

      //Dispacth action to update the store
      this.props.dispatch(addHistoryEntry(historyEntry));

      //Save the entry in AsyncStorage history
      saveHistoryEntry(historyEntry);
      
      //It clears today notification and sets tomorrow notification
      clearLocalNotification()
        .then(setLocalNotification);

      return (
        <View style={styles.container}>
          <View style={styles.main}>
            <MyText>{showResult(correctAnswers, deck.questions.length)}</MyText>
            <MyButton onPress={this.restartQuiz} addStyle={{marginBottom: 10, marginTop: 90, backgroundColor: blue}}>
              Restart Quiz
            </MyButton>
            <MyButton onPress={this.backToDeck} addStyle={{backgroundColor: black}}>
              Back to Deck
            </MyButton>
          </View>
        </View>
      )
    }

    const card = deck.questions[cardIndex];

    return (
      <View style={styles.container}>
        <View style={styles.questions}>
          <Text style={{fontSize: 20}}>
            {getCardNumberDesc(deck,cardIndex)}
          </Text>
        </View>
        {card && (
          <View style={styles.main}>
            {showQuestion && (
              <View>                  
                <MyText>{card.question}</MyText>
                <TextButton onPress={this.toggleQuestionAnswer} addStyle={styles.textButton}>
                  Answer
                </TextButton>
              </View>
            )}
            {!showQuestion && (
              <View>
                <MyText>{card.answer}</MyText>
                <TextButton onPress={this.toggleQuestionAnswer} addStyle={styles.textButton}>
                  Question
                </TextButton>
              </View>
            )}
            <MyButton 
              onPress={this.correctAnswer} 
              addStyle={{marginBottom: 10, marginTop: 90, backgroundColor: green}}
              disabled={showQuestion}
            >
              Correct
            </MyButton>
            <MyButton
              onPress={this.showNewCard}
              addStyle={{backgroundColor: red}}
              disabled={showQuestion}
            >
              Incorrect
            </MyButton>
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    color: 'red'
  },
  questions: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginLeft: 8,
  }
});

const mapStateToProps = ({ decks }, { navigation }) => ({
  deck: decks[navigation.state.params.deckTitle],
});

export default connect(mapStateToProps)(QuizView);