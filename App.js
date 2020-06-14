import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style = {styles.container}>
        <Header />

      <View>
        <Text>This is the homepage</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10
  }
});

