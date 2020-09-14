import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from './../components/Card';
import Input from './../components/Input';
import Colors from './../config/colors';

const StartScreen = props => {
    return (
      <View style={styles.screenMainStyle}>
        <Text style={styles.title}>{props.titleText}</Text>
        <Card style={styles.inputContainerStyle}>
          <Text>Select a Number</Text>
          <Input style={styles.textInputStyle} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType='number-pad' maxLength={2} />
          <View style={styles.groupButtonStyle}>
            <View style={styles.buttonStyle}><Button title='Reset' color='red'></Button></View>
            <View style={styles.buttonStyle}><Button title='Confirm' color='green'></Button></View>
          </View>
        </Card>
      </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    screenMainStyle: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginVertical: 10,
    },
    inputContainerStyle: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
    },
    textInputStyle: {
      width: 50,
      textAlign: 'center'
    },
    groupButtonStyle: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    buttonStyle: {
      width: '40%',
    }
});