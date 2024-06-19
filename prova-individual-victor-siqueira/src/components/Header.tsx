import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/images/logo.png')} style={styles.headerEsquerda} />
      <Image source={require('../../assets/images/carrinho-menu.png')} style={styles.headerDireita} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 90
  },
  headerEsquerda: {
    height: 40,
    resizeMode: 'contain',
  },
  headerDireita: {
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
});
