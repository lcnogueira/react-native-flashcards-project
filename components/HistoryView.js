import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MyText from './MyText';
import { getHistory } from '../utils/api';
import { receiveHistory } from '../actions';
import { Table, Row, Rows } from 'react-native-table-component';
import { blue } from '../utils/colors';

class HistoryView extends Component {

  state = {
    ready: false,
  };
  
  componentDidMount(){
    getHistory()
    .then(entries => {
      if (entries!==null) this.props.dispatch(receiveHistory(entries));
    })
    .then(() => 
      this.setState(() => 
        ({ ready: true })
      )
    );
  };

  render(){
    const { history } = this.props;

    if(!this.state.ready){
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );      
    }

    if(history.length === 0){
      return (
        <View style={styles.center}>
          <MyText>There are no entries in the history!</MyText>
        </View>
      )
    }

    const tableHead = ['Deck', 'Correct Answers', 'Questions', 'Date'];
    //Turns objects vector into vectors vector
    const tableData = history.map(entry => Object.values(entry));

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>History</Text>          
          </View>
          <Table borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={{height: 60}} textStyle={styles.tbHead}/>
            <Rows data={tableData} style={{height: 60}} textStyle={styles.tbData} />
          </Table>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  titleContainer: {
    borderBottomWidth:1, 
    backgroundColor: blue,
    borderColor:'#c8c7cc',
  },
  mainTitle: {
    color:'white',
    marginTop:15,
    marginBottom:15, 
    marginLeft:15,
    fontWeight:'bold',
    fontSize:20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tbHead: {
    color:'#009688', 
    marginBottom:10, 
    fontWeight:'500',
    textAlign: 'center'
  },
  tbData: {
    color:'black', 
    fontSize: 16,
    textAlign: 'center'
  },
});

mapStateToProps = ({ history }) => ({ history });

export default connect(mapStateToProps)(HistoryView);