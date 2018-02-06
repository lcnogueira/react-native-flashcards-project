import React from 'react';
import { View, Platform } from 'react-native';
import AddDeck from './components/AddDeck';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DecksList from './components/DecksList';
import { TabNavigator } from 'react-navigation';
import { blue, white, purple } from './utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from './components/MyStatusBar';


const Tabs = TabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='list' size={26} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-circle-outline' size={26} color={tintColor} />
    }
  }
},{
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      // showLabel: false,
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 57,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
      tabStyle: {
        flexDirection:'row'
      }
    }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
          <Tabs />
        </View>
      </Provider>
    );
  }
}
