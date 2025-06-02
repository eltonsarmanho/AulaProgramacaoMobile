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
        <View style={styles.shareBox}>
            <TouchableOpacity sty onPress={onShare}>
                <Text>Compartilhar</Text>
            </TouchableOpacity>
         </View>
         
        </View>
       
    );
}

const styles = StyleSheet.create({
 
  shareBox: {
    alignItems: 'center',
    backgroundColor: '#A0C3FF',
    marginTop: 20,
    marginHorizontal: 50,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
});


