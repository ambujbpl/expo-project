import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../config/colors';

// import React from 'react';
// import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import MainButton from '../components/MainButton';
// import colors from '../config/colors';
// import { GlobalStyles } from '../config/globalStyle';

const GameOver = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            // source={{
            //   uri:
            //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.round}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userChoice}</Text>.
          </BodyText>
        </View>

        <MainButton onPress={props.newGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOver;


// const GameOver = props => {
//   return (
//     <ScrollView>
//     <View style={styles.screen}>
//       <Text style={GlobalStyles.title}>
//         The Game is Over!
//       </Text>
//       <View style={styles.imageContainerStyle}>
//         <Image
//           fadeDuration={100}
//           source={require('./../assets/success.png')}
//           // source={{uri: 'https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg'}}
//           style={styles.imageStyle}
//           resizeMode="cover"
//         />
//       </View>      
//       <Text style={styles.footerTextStyle}>
//         Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to
//           guess the number <Text style={styles.highlight}>{props.userChoice}</Text>.
//       </Text>
//       <MainButton onPress={props.newGame}>New Game</MainButton>
//       {/* <Button title="New Game" onPress={props.newGame}/> */}
//       </View>
//       </ScrollView>
//   );
// };
// export default GameOver;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   imageContainerStyle: {
//     // width: 300,
//     // height: 300,
//     // width: Dimensions.get('window').width > 400 ? 300 : 220,
//     // height: Dimensions.get('window').height > 600 ? 300 : 220,
//     // borderRadius: 150,
//     width: Dimensions.get('window').width * 0.7,
//     height: Dimensions.get('window').width * 0.7,
//     borderRadius: Dimensions.get('window').width * 0.7 / 2,
//     borderWidth: 3,
//     borderColor: 'black',
//     overflow: 'hidden',
//     marginVertical: 20,
//   },
//   imageStyle: {
//     width: '100%',
//     height: '100%',    
//   },
//   highlight: {
//     color: colors.primary,
//     fontFamily: 'open-sans-bold'
//   },
//   footerTextStyle: {
//     marginBottom: 15,
//     textAlign: 'center'
//   }
// });