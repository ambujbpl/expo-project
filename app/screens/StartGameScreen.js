import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "./../components/Card";
import Input from "./../components/Input";
import Colors from "./../config/colors";
import { GlobalStyles } from '../config/globalStyle';
const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputNumber) => {
    setEnteredValue(inputNumber.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirm(false);
  };
  const submitInputHandler = () => {
    const number = parseInt(enteredValue);
    if (
      isNaN(number) ||
      number <= 0 ||
      number > 99 ||
      number == "" ||
      number == undefined
    ) {
      Alert.alert("Invalid Number", "Number in between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(number);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirm) {
    confirmedOutput = (
      <Card style={GlobalStyles.mt20}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game"/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screenMainStyle}>
        <Text style={styles.title}>{props.titleText}</Text>
        <Card style={styles.inputContainerStyle}>
          <Text>Select a Number</Text>
          <Input
            style={styles.textInputStyle}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.groupButtonStyle}>
            <View style={styles.buttonStyle}>
              <Button
                title="Reset"
                color="red"
                onPress={resetInputHandler}
              ></Button>
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Confirm"
                color="green"
                onPress={submitInputHandler}
              ></Button>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screenMainStyle: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainerStyle: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  textInputStyle: {
    width: 50,
    textAlign: "center",
  },
  groupButtonStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonStyle: {
    width: "40%",
  },
});
