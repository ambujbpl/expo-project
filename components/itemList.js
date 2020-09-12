import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemList = props => {
  return (
    <View style={styles.listText}>
      <Text>{ props.title }</Text>
    </View>
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