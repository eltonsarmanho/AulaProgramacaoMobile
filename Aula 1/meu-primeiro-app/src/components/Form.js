import React,{useState} from 'react';
import { Text,View, Button,TextInput }   from 'react-native';   
import Result from './Result';


export default function Form() {

const [peso,setPeso] = useState(0);
const [altura,setAltura] = useState(0);
const [imc,setImc] = useState(null);
const [msg,setMsg] = useState('Preencha os campos corretamente');
const [msgbtn,setMsgBtn] = useState('Calcular IMC');
function calcularImc() {
    setImc(peso/(altura*altura));
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
        <View>
            <View>
                <Text>Peso (Kg)</Text>
                <TextInput placeholder="Ex: 70.5" keyboardType="numeric" onChangeText={setPeso} value={peso} />
            </View>
            <View>
                <Text>Altura (m)</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura} />
            </View>
            <View>
                <Button title={msgbtn} onPress={validatorImc} />
            </View>
            <View>
                <Result valor={imc} msg={msg} />
            </View>
        </View>
    );
}