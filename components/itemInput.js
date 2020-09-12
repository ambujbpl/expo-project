import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ItemInput = props => {  
  const [ inputText, setInputText ] = useState('');
  const setInputTextHandler = (test) => {
    setInputText(test);
  }
  return (
    <View style={styles.rowView}>
      <TextInput 
        placeholder='Course Goal'
        style={{width: 200, borderColor: 'black', borderWidth : 1, padding: 10 }}
        onChangeText = {setInputTextHandler}
        value = {inputText}
      />
      {/* <Button title='Add' onPress={() => props.onAddGoal(inputText)}/> */}
      <Button title='Add' onPress={props.onAddGoal.bind(this,inputText)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default ItemInput;