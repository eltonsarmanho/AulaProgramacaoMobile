import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import pageContent from './src/Pages/Content/pageContent';
import pageInfo from './src/Pages/Info/pageInfo';
import pageContato from './src/Pages/Contatos/pageContato';
console.log('Componente pageContato importado:', pageContato); // Adicione para depuração

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Home Screen</Text>
      <Button style={styles.ButtonStyle}  onPress={() => navigation.navigate('Content')}>
        Go to Content
      </Button>
     
      <Button style={styles.ButtonStyle} onPress={() => navigation.navigate('Info')}>
        Go to Info
      </Button>
    </View>
  );
}


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Content: pageContent,
    Info: pageInfo,
    pageContato: pageContato,
  },
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {
  return <Navigation />;
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