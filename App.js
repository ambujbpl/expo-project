import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './app/components/Header';
import StartGameScreen from './app/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      <StartGameScreen titleText='The Game Screen?'/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});