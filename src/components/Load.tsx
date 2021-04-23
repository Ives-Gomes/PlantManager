import React, { ReactElement } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Load(): ReactElement {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    backgroundColor: 'transparent',
    width: 400,
    height: 400,
  },

  text: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors.green_dark,
  },
});
