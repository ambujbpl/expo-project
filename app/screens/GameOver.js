import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>
        The Game is Over!
      </Text>
      <Text>
        Number of rounds : {props.rounds}
      </Text>
      <Text>
        The Number was : {props.userChoice}
      </Text>
      <Button title="New Game" onPress={props.newGame}/>
    </View>
  );
};
export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});