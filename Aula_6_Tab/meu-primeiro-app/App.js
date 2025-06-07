import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Importação do navegador de abas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importação de ícones para as abas
import { Ionicons } from '@expo/vector-icons'; 

// Supondo que suas páginas sejam componentes simples para este exemplo.
// Se os caminhos estiverem corretos, mantenha suas importações originais.
//const pageContent = () => <View style={styles.container}><Text style={styles.text}>Página de Conteúdo</Text></View>;
//const pageInfo = () => <View style={styles.container}><Text style={styles.text}>Página de Informações</Text></View>;
//const pageContato = () => <View style={styles.container}><Text style={styles.text}>Página de Contato</Text></View>;

// --- Telas ---
import pageContent from './src/Pages/Content/pageContent';
import pageInfo from './src/Pages/Info/pageInfo';
import pageContato from './src/Pages/Contatos/pageContato';
// A tela Home não precisa de `useNavigation` aqui, pois a navegação já é provida pelo Tab Navigator.
// Mantive o componente simples para clareza.
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial!</Text>
      <Text>Use as abas abaixo para navegar.</Text>
    </View>
  );
}

// --- Componente Principal da Aplicação ---

// Cria a instância do navegador de abas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Usamos o Tab.Navigator em vez do Drawer.Navigator */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          // Função para definir o ícone de cada aba
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Content') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Info') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Contato') {
              iconName = focused ? 'call' : 'call-outline';
            }

            // Você pode retornar qualquer componente aqui!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Estilos adicionais para as abas
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* As telas são definidas da mesma forma, com Tab.Screen */}
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Tab.Screen name="Content" component={pageContent} options={{ title: 'Conteúdo' }} />
        <Tab.Screen name="Info" component={pageInfo} options={{ title: 'Informações' }} />
        <Tab.Screen name="Contato" component={pageContato} options={{ title: 'Contato' }} />
      </Tab.Navigator>
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
});