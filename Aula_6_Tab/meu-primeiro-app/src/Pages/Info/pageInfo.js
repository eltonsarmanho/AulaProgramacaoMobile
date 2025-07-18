// Em seu arquivo pageInfo.js (exemplo conceitual)
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// 'navigation' é injetado pelo React Navigation se PageInfo for uma tela do navegador.
// export default function pageInfo({ navigation }) { // Remove prop
export default function pageInfo() { // Use functional component without prop
  const navigation = useNavigation(); // Get navigation using hook

  const irParaContato = () => {
    // 'PageContato' deve corresponder ao nome da rota definido no seu navegador.
    navigation.navigate('Contato');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Página de Informações</Text>
      <Button style={styles.ButtonStyle}
        title="Ir para Contato!"
        onPress={irParaContato}
      />
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