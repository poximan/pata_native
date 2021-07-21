/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {colors} from './src/utils/theme';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './src/utils/dimensions';

const App = () => {
  console.log('device heigth -> ', DEVICE_HEIGHT);
  console.log('device heigth -> ', DEVICE_WIDTH);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>este es mi texto</Text>
      {/* comentario */}
      <Text>Subtitulo</Text>
      <Image
        source={{url: "https://reactnative.dev/img/tiny_logo.png"}}
        style={styles.image}
      />
    </View>
  )
 };

 const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  }
 });

 export default App;
