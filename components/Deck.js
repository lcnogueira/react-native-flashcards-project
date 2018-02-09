import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { blue, white, gray } from '../utils/colors';
import { getCardsDesc } from '../utils/helpers';

export default Deck = ({ deck, navigate }) => (
  <TouchableOpacity 
    onPress={() => navigate('DeckView',{ deckTitle: deck.title})}
  >
    <View style={styles.deck}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{getCardsDesc(deck)}</Text>
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