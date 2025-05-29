import React from 'react';  
import { Text } from 'react-native';


export default function Result(props) {
    return (
       <Text>
           {props.msg} {props.valor ? props.valor.toFixed(2) : ''}
        </Text>
    );
}

