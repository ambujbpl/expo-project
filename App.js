import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { 
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import ItemList from './components/itemList';
import ItemInput from './components/itemInput';

export default function App() {
 
  const [ allGoalsList, setAllGoalsList ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const setAddNewGoalList = (inputText) => {
    setAllGoalsList([...allGoalsList, { key: Math.random().toString(), value: inputText}]);
    cancelAddNewGoal();
  };
  const deleteItemOnGoalList = (id) => {
    setAllGoalsList(currentAllGoalsList => {
      return currentAllGoalsList.filter((goal) => goal.key != id)
    });
  };
  const cancelAddNewGoal = () => {
    setModalVisible(false);
  };
  console.log('allGoalsList : ',allGoalsList);
  return (
    <View style={styles.mainView}>
      <Button title='Add New Goal' onPress={() => setModalVisible(true)}/>
      <ItemInput 
        onAddGoal={setAddNewGoalList} 
        modalVisibleCheck={modalVisible}
        cancelAddNewGoalFun={cancelAddNewGoal} 
      />
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