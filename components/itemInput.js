import React, { useState } from 'react';
import { 
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';

const ItemInput = props => {  
  const [ inputText, setInputText ] = useState('');
  const setInputTextHandler = (test) => {
    setInputText(test);
  }
  const validatInputValueBeforeAddIngoalList = () => {
    if(inputText != '' && inputText.length > 2) {
      props.onAddGoal(inputText);
      setInputText('');
    } else {
      Alert.alert('Name field should not empty and minimum length will be 3');
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisibleCheck}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}>
      <View style={styles.rowView}>
        <TextInput 
          placeholder='Course Goal'
          style={styles.inputTextCss}
          onChangeText = {setInputTextHandler}
          value = {inputText}/>
          {/* <Button title='Add' onPress={() => props.onAddGoal(inputText)}/> */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonCss}>
            <Button title="Cancel" color="red" onPress={props.cancelAddNewGoalFun} />
          </View> 
          <View style={styles.buttonCss}>
            <Button title='Add' color="green" onPress={validatInputValueBeforeAddIngoalList}/>
          </View>          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputTextCss: {
    width: '80%',
    borderColor: 'black',
    borderWidth : 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  buttonCss: {
    width: '40%'
  }
});

export default ItemInput;