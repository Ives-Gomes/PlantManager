import React, { ReactElement } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/Eu.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Header(): ReactElement {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Ives</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});