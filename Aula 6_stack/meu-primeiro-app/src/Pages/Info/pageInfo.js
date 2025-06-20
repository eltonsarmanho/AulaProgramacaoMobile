// Em seu arquivo pageInfo.js (exemplo conceitual)
import React from 'react';
import { Button } from '@react-navigation/elements';

import { View,  Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// 'navigation' é injetado pelo React Navigation se PageInfo for uma tela do navegador.
// export default function pageInfo({ navigation }) { // Remove prop
export default function pageInfo() { // Use functional component without prop
  const navigation = useNavigation(); // Get navigation using hook


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Página de Informações</Text>
      <Button style={styles.ButtonStyle}      
        onPress={() => navigation.navigate('pageContato',{nome: 'Elton Sarmanho', documento: 'xxx.xxx.xxx-xx'})}>
             Elton Sarmanho</Button>
       <Button style={styles.ButtonStyle}      
        onPress={() => navigation.navigate('pageContato',{nome: 'Kalel Sarmanho', documento: 'yyy.xxx.xxx-xx'})}>
             Kalel Sarmanho</Button>
        <Button style={styles.ButtonStyle}      
        onPress={() => navigation.navigate('pageContato',{nome: 'Kron BJJ', documento: 'www.xxx.xxx-xx'})}>
             Kron BJJ</Button>
      
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