import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/Titulo';
import Main from './src/components/Main';
export default function App() {
  return (
    <View style={styles.container}>
     <Titulo />
     <Main />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o contêiner ocupe todo o espaço disponível
    backgroundColor: '#e0e0e0', // Um cinza claro suave para o fundo da tela
    paddingTop: 50, // Espaçamento do topo para evitar a barra de status em alguns dispositivos
    paddingHorizontal: 20, // Padding lateral para o conteúdo
    alignItems: 'center', // Centraliza os itens horizontalmente
    // justifyContent: 'center', // Removido para permitir que os componentes se posicionem naturalmente
  },
});

