import React from 'react';
import { View, Platform } from 'react-native';
import AddDeckView from './components/AddDeckView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DecksListView from './components/DecksListView';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { blue, white, purple } from './utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from './components/MyStatusBar';
import DeckView from './components/DeckView';
import AddCardView from './components/AddCardView';
import QuizView from './components/QuizView';

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

const MainNavigator = StackNavigator({
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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
