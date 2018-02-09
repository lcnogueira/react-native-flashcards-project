import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MyButton from './MyButton';
import { blue, black, gray } from '../utils/colors';
import { getCardsDesc } from '../utils/helpers';

class DeckView extends Component {

  static navigationOptions = ({ navigation }) => ({title: navigation.state.params.deckTitle});

  render(){
    const { deck, navigate } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{getCardsDesc(deck)}</Text>
        <MyButton 
          onPress={() => navigate('AddCardView', { deckTitle: deck.title })}
          label={'Add Card'} 
          backgroundColor={blue} />
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

const mapStateToProps = (decks, { navigation }) => ({
  deck: decks[navigation.state.params.deckTitle],
  navigate: navigation.navigate,
});

export default connect(mapStateToProps)(DeckView);