import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MyButton from './MyButton';
import { blue, black, gray } from '../utils/colors';
import { getCardsDesc } from '../utils/helpers';
import MyText from './MyText';

class DeckView extends Component {

  static navigationOptions = ({ navigation }) => ({title: navigation.state.params.deckTitle});

  startQuiz = (deck, navigate) => {
    deck.questions.length > 0 
    ? navigate('QuizView', { deckTitle: deck.title }) 
    : alert('There is no card in this deck.');
  };

  render(){
    const { deck, navigate } = this.props;

    return (
      <View style={styles.container}>
        <MyText>{deck.title}</MyText>
        <Text style={{fontSize: 18, color: gray }}>{getCardsDesc(deck)}</Text>
        <MyButton 
          onPress={() => navigate('AddCardView', { deckTitle: deck.title })} 
          addStyle={{marginBottom: 10, marginTop: 90, backgroundColor: blue}} 
        >
          Add Card
        </MyButton>
        <MyButton 
          onPress={() => this.startQuiz(deck,navigate)} 
          addStyle={{backgroundColor: black}} 
        >
          Start Quiz
        </MyButton>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (decks, { navigation }) => ({
  deck: decks[navigation.state.params.deckTitle],
  navigate: navigation.navigate,
});

export default connect(mapStateToProps)(DeckView);