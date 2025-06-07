import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function pageContato() { // Ou pageContato, para manter consistência com seus outros arquivos
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de Contato!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  ButtonStyle: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  }

});