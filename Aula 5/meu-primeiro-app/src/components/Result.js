import React from 'react';  
import { Text,Share,StyleSheet, View,TouchableOpacity } from 'react-native';

export default function Result(props) {
    //Peguei direto da documentação do react native
    const onShare = async () => {    
      const result = await Share.share({
        message:
          'Meu imc é: ' + props.valor.toFixed(2),
      })};

    return (
    <View>
        <View>
            <Text>
           {props.msg} {props.valor ? props.valor.toFixed(2) : ''}
             </Text>
        </View>
        {props.valor !== null && props.valor > 0 ?
        <View style={styles.shareContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                <Text style={styles.shareText}>Compartilhar</Text>
            </TouchableOpacity>
         </View>:null
         }
         
        </View>
       
    );
}

const styles = StyleSheet.create({
  shareContainer: {
    paddingHorizontal: 20, // Adiciona um padding para o conteúdo, em vez de margem no shareBox
    marginTop: 20,
  },
  shareButton: {
    backgroundColor: '#A0C3FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Centraliza o texto horizontalmente
    width: '100%', // Faz o TouchableOpacity ocupar toda a largura do shareContainer
  },
  shareText: {
    color: '#FFFFFF', // Cor do texto para melhor contraste (opcional)
    fontWeight: 'bold',
  },
});


