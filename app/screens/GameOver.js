import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';
import colors from '../config/colors';
import { GlobalStyles } from '../config/globalStyle';


const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text style={GlobalStyles.title}>
        The Game is Over!
      </Text>
      <View style={styles.imageContainerStyle}>
        <Image
          fadeDuration={100}
          source={require('./../assets/success.png')}
          // source={{uri: 'https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg'}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>      
      <Text style={styles.footerTextStyle}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.userChoice}</Text>.
      </Text>
      <MainButton onPress={props.newGame}>New Game</MainButton>
      {/* <Button title="New Game" onPress={props.newGame}/> */}
    </View>
  );
};
export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainerStyle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold'
  },
  footerTextStyle: {
    marginBottom: 15,
    textAlign: 'center'
  }
});