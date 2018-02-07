import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MyButton from './MyButton';
import { blue, black, gray } from '../utils/colors';

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({title: navigation.state.params.deckTitle});

  //TODO: Code these functions
  addCard = () => {};
  startQuiz = () => {};

  render(){
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
        <MyButton onPress={this.addCard} label={'Add Card'} backgroundColor={blue} />
        <MyButton onPress={this.startQuiz} label={'Start Quiz'} backgroundColor={black} />
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
  title: {
    fontSize: 22,
    marginBottom: 5
  },
  cards: {
    color: gray,
    marginBottom: 90    
  }
});

const mapStateToProps = (decks, { navigation }) => ({deck: decks[navigation.state.params.deckTitle] });

export default connect(mapStateToProps)(DeckView);