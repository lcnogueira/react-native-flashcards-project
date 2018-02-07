import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { blue, white, gray } from '../utils/colors';

export default Deck = ({ deck, navigate }) => (
  <TouchableOpacity 
    onPress={() => navigate('DeckView',{ deckTitle: deck.title})}
  >
    <View style={styles.deck}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{deck.questions.length} cards</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  deck: {
    marginTop: 10,
    padding: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
    height: 150
  },
  title: {
    color: white,
    fontSize: 22,
    marginBottom: 5
  },
  cards: {
    color: white,
  }
})