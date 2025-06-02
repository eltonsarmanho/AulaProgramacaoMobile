import React from 'react';  
import { StyleSheet, Text, View } from 'react-native';

export default function Titulo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: 'linear-gradient(180deg, #A0C3FF 0%, #667EEA 100%)',
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -100,
    color: '#1a1a1a',
  }
});