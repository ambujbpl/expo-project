import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItemList = props => {
  return (
    <TouchableOpacity onPress={ () => props.deleteItem(props.id) }>
      <View style={styles.listText}>
        <Text>{ props.title }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listText: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 10,
    },
});

export default ItemList;