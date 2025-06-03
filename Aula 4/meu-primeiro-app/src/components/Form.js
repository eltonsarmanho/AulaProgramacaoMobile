import React, { useState } from 'react';
import { Text, View,Vibration, Button,FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Result from './Result';

export default function Form() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [msg, setMsg] = useState('Preencha os campos corretamente');
  const [msgbtn, setMsgBtn] = useState('Calcular IMC');
  const [msgError, setMsgError] = useState('');
  const [imcList, setImcList] = useState([]);

  function calcularImc() {
    let  imc = peso / (altura * altura);
    setImcList([...imcList, imc.toFixed(2)]);
    console.log(imcList);
    setImc(imc);
  }

  function validatorImc() {
    //Apos clicar no botão de reiniciar, o usuário pode clicar novamente no botão de calcular IMC
    if (msgbtn === 'Reiniciar') {
      setPeso(0);
      setAltura(0);
      setMsg('Preencha os campos corretamente');
      setMsgBtn('Calcular IMC');
      setImc(0);
      return;
    }
    //Verifica se os campos foram preenchidos corretamente
    if (peso > 0 && altura > 0) {
      calcularImc();
      setMsg('O resultado do seu IMC é = ');
      setMsgBtn('Reiniciar');     
      setMsgError('');
      return;
    }
    else {
      ///Vibração para o usuário
      Vibration.vibrate()
      setMsgError('Campo Obrigatório');
    }
    //Se os campos não forem preenchidos corretamente
    setMsgBtn('Calcular IMC');
    setMsg('Preencha os campos corretamente');
    setImc(0);
  }

  return (
    <View style={styles.container}>
      

      <Text style={styles.label}>Peso (kg):</Text>
      <Text style={{ color: 'red' }}>{peso > 0  ? '' : 'Campo Obrigatório'  }</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 70.5"
        keyboardType="numeric"
        onChangeText={setPeso}
        value={peso}
      />

      <Text style={styles.label}>Altura (m):</Text>
      <Text style={{ color: 'red' }}>{msgError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="numeric"
        onChangeText={setAltura}
        value={altura}
      />

      <TouchableOpacity style={styles.button} onPress={validatorImc}>
        <Text style={styles.buttonText}>{msgbtn}</Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        <Result valor={imc} msg={msg} />
      </View>     

        <FlatList // Nao Coloque FlatList dentro de um View
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.listBox}//Estilo do scrollview do flatlist
          data={imcList}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },  
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4c4cff',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultBox: {
    
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000', // Shadow for depth, similar to the calculator's cards
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Slight shadow
    shadowRadius: 5, // Soft shadow
  },
  listBox: {    
    color: '#fff',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // A light background for the list container, similar to the calculator's background
    borderRadius: 15, // Rounded corners for the container
    padding: 20, // Inner padding to give content some space
    marginHorizontal: 15, // Horizontal margin to prevent it from touching the screen edges
    marginTop: 20, // Top margin for spacing from other elements
    shadowColor: '#000', // Shadow for depth, similar to the calculator's cards
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Slight shadow
    shadowRadius: 5, // Soft shadow
    elevation: 3, // Elevation for Android
  },
  item: {
    backgroundColor: '#A0C3FF',
    borderRadius: 5,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 16,
    shadowColor: '#000', // Shadow for depth, similar to the calculator's cards
  }
});
