import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { blue, white } from '../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import AddDeckView from './AddDeckView';
import DecksListView from './DecksListView';
import DeckView from './DeckView';
import AddCardView from './AddCardView';
import QuizView from './QuizView';
import HistoryView from './HistoryView';

const Tabs = TabNavigator({
  DecksListView: {
    screen: DecksListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='list' size={26} color={tintColor} />
    }
  },
  AddDeckView: {
    screen: AddDeckView,
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
      },
    },
});

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    },
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    },
  },
});

const Drawer = DrawerNavigator({
  Home: {
    screen: Stack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <MaterialIcons name='home' size={26} color={tintColor} />
    }
  },
  HistoryView: {
    screen: HistoryView,
    navigationOptions: {
      drawerLabel: 'History',
      drawerIcon: ({ tintColor }) => <MaterialIcons name='history' size={26} color={tintColor} />
    }
  },
});

export default class MainNavigator extends Component {
  render(){
    return (
      <Drawer />
    )
  }
}