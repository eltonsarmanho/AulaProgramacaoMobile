import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Result from './Result';

export default function Form() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(null);
  const [msg, setMsg] = useState('Preencha os campos corretamente');
  const [msgbtn, setMsgBtn] = useState('Calcular IMC');

  function calcularImc() {
    setImc(peso / (altura * altura));
  }

  function validatorImc() {
    if (peso > 0 && altura > 0) {
      calcularImc();
      setMsg('Seu IMC é: ');
      setMsgBtn('Reiniciar');
      setPeso(0);
      setAltura(0);
      return;
    }
    setMsgBtn('Calcular IMC');
    setMsg('Preencha os campos corretamente');
    setImc(null);
  }

  return (
    <View style={styles.container}>
      

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 70.5"
        keyboardType="numeric"
        onChangeText={setPeso}
        value={peso}
      />

      <Text style={styles.label}>Altura (m):</Text>
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
  },
});
