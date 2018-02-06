import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/AddDeck';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DecksList from './components/DecksList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <DecksList />
        </View>
      </Provider>
    );
  }
}
