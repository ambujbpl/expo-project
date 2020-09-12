import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ItemList from './components/itemList';
import ItemInput from './components/itemInput';

export default function App() {
 
  const [ allGoalsList, setAllGoalsList ] = useState([]);
  const setAddNewGoalList = (inputText) => {
    setAllGoalsList([...allGoalsList, { key: Math.random().toString(), value: inputText}]);
  }
  const deleteItemOnGoalList = (id) => {
    setAllGoalsList(currentAllGoalsList => {
      return currentAllGoalsList.filter((goal) => goal.key != id)
    });
  }

  return (
    <View style={styles.mainView}>
      <ItemInput onAddGoal={setAddNewGoalList}/>
      <FlatList 
        data={allGoalsList} 
        renderItem={ itemData => 
        <ItemList 
          deleteItem={deleteItemOnGoalList} 
          title={itemData.item.value} 
          id={itemData.item.key} 
        />}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding:50
  },
});
