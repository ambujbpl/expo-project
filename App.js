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
  return (
    <View style={styles.mainView}>
      <ItemInput onAddGoal={setAddNewGoalList}/>
      <FlatList 
        data={allGoalsList} 
        renderItem={ itemData => <ItemList title={itemData.item.value} />}
      /> 
    </View>
  );
}

{/* <ScrollView>
  {allGoalsList.map( (goal) => (
  <Text style={styles.listText} key={ goal }>
    { goal }
  </Text>
  ))}        
</ScrollView> */}


const styles = StyleSheet.create({
  mainView: {
    padding:50
  },
});
