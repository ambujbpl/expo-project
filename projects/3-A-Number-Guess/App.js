import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './app/components/Header';
import StartGameScreen from './app/screens/StartGameScreen';
// import GameScreen from './app/screens/GameScreen';
// import GameScreen from './app/screens/GameScreenScroll';
import GameScreen from './app/screens/GameScreenFlat';
import GameOver from './app/screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./app/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./app/assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        rounds={guessRounds}
        userChoice={userNumber}
        newGame={configureNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// import Header from './app/components/Header';
// import GameOver from './app/screens/GameOver';
// // import GameScreen from './app/screens/GameScreen';
// // import GameScreen from './app/screens/GameScreenScroll';
// import GameScreen from './app/screens/GameScreenFlat';
// import StartGameScreen from './app/screens/StartGameScreen';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./app/assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./app/assets/fonts/OpenSans-Bold.ttf')
//   });
// };

// export default function App() {
//   const [userNumber, setUserNumber] = useState();
//   const [guessRounds, setguessRounds] = useState(0);
//   const [dataLoaded, setDataLoaded] = useState(false);
  
//   if (!dataLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setDataLoaded(true)}
//         onError={(err) => console.log(err)}
//       />
//     );
//   }

//   const newGameHandler = () => {
//     setguessRounds(0);
//     setUserNumber(null);
//   }
//   const startGameHandler = (selectedNumber) => {
//     setUserNumber(selectedNumber);
//   }

//   const gameOverHandler = (numberOfRound) => {
//     setguessRounds(numberOfRound);
//   }

//   let defualtUI = <StartGameScreen onStartGame={startGameHandler}/>;
//   if (userNumber && guessRounds <= 0) {
//     defualtUI = (
//       <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
//     );
//   } else if (guessRounds > 0) {
//     defualtUI = (
//       <GameOver rounds={guessRounds} userChoice={userNumber} newGame={newGameHandler} />
//     );
//   }
//   return (
//     <View style={styles.screen}>
//       <Header title='Guess a Number' />
//       {defualtUI}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
// });