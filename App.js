import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing';


export default function App() {


  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
