import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Importação principal para envolver a navegação
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';

// Importe suas páginas (certifique-se que os caminhos estão corretos)
import pageContent from './src/Pages/Content/pageContent';
import pageInfo from './src/Pages/Info/pageInfo';
import pageContato from './src/Pages/Contatos/pageContato';

// --- Telas ---

// Tela Inicial
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial!</Text>
      <Button onPress={() => navigation.navigate('Content')}>
        Ir para Conteúdo
      </Button>
      <View style={{ marginVertical: 5 }} /> 
      <Button onPress={() => navigation.navigate('Info')}>
        Ir para Informações
      </Button>
    </View>
  );
}


// --- Componente Principal da Aplicação ---

// Cria a instância do navegador
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // 1. Envolva tudo com NavigationContainer
    <NavigationContainer>
      {/* 2. Use o Componente Drawer.Navigator */}
       <Drawer.Navigator initialRouteName="Home">
        {/* 3. Defina cada tela com o componente Drawer.Screen */}
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Drawer.Screen name="Content" component={pageContent} options={{ title: 'Conteúdo' }} />
        <Drawer.Screen name="Info" component={pageInfo} options={{ title: 'Informações' }} />
        <Drawer.Screen name="Contato" component={pageContato} options={{ title: 'Contato' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
  ButtonStyle: { // Este estilo não é aplicado ao Button do @react-navigation/elements
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  }
});