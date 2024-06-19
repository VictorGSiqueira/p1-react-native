import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Body() {
  return (
    <View style={styles.body}>
      <Image source={require('../../assets/images/propaganda1.png')} style={styles.bodyImage} />
      <Image source={require('../../assets/images/propaganda2.png')} style={styles.bodyImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    gap: 10
  },
  bodyImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
