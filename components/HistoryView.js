import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MyText from './MyText';
import { getHistory } from '../utils/api';
import { receiveHistory } from '../actions';
import { Table, Row, Rows } from 'react-native-table-component';

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
          <Text style={[styles.text, {fontSize: 22, marginBottom: 10}]}>History</Text>
          <Table borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={{height: 60, backgroundColor: '#f1f8ff'}} textStyle={styles.text}/>
            <Rows data={tableData} style={{ height: 60 }} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
    margin: 5,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  },
});

mapStateToProps = ({ history }) => ({ history });

export default connect(mapStateToProps)(HistoryView);