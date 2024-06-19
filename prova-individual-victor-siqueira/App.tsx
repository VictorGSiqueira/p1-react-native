import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import SearchBox from './src/components/SearchBox';
import Body from './src/components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBox />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});
