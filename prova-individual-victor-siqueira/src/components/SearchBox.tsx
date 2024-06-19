import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default function SearchBox() {
  return (
    <View style={styles.searchBox}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.textoPesquisa} placeholder="Search for sweet gear" />
        <Image source={require('../../assets/images/lupa.png')} style={styles.imagemPesquisa} />
      </View>
      <View style={styles.divisor} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 16,
  },
  searchContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d4d4cc',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 40,
    backgroundColor: '#f3f2ed'
  },
  imagemPesquisa: {
    position: 'absolute',
    left: 10,
    width: 25,
    height: 25,
  },
  textoPesquisa: {
    flex: 1,
    height: 40,
    fontSize: 16
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: '#d4d4cc',
    marginTop: 10,
  },
});
