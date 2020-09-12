import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ inputText, setInputText ] = useState('');
  const [ allGoalsList, setAllGoalsList ] = useState([]);
  const setInputTextHandler = (test) => {
    setInputText(test);
  }
  
  const setAddNewGoalList = () => {
    console.log('value : ',inputText);
    setAllGoalsList([...allGoalsList, inputText]);
    console.log('allGoalsList : ',allGoalsList);
  }
  return (
    <View style={{padding:50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput 
          placeholder='Course Goal'
          style={{width: 200, borderColor: 'black', borderWidth : 1, padding: 10 }}
          onChangeText = {setInputTextHandler}
          value = {inputText}
        />
        <Button title='Add' onPress={setAddNewGoalList}/>
      </View>
      <View>
        {allGoalsList.map( (goal) => <Text key={ goal }>{ goal }</Text>)}        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
