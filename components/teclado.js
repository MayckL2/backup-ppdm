import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './Botao';
import backSpace from '../backspace.png'

export default function Teclado() {
  const [valor, setValor] = useState('');

  return (
    <View>
      SCREEN Calculadora
      
      <Text>{valor}</Text>
      
      <Text style={styles.teclado}>
        <Botao valor="(" dados={() => setValor(valor + '(')} cor='cinza'/>
        <Botao valor=")" dados={() => setValor(valor + ')')} cor='cinza'/>
        <Botao valor="%" dados={() => setValor(valor + '%')} cor='cinza'/>
        <Botao valor="÷" dados={() => setValor(valor + '÷')} cor='cinza'/>
        <Botao valor="9" dados={() => setValor(valor + 9)}/>
        <Botao valor="8" dados={() => setValor(valor + 8)}/>
        <Botao valor="7" dados={() => setValor(valor + 7)}/>
        <Botao valor="x" dados={() => setValor(valor + 'x')} cor='cinza'/>
        <Botao valor="4" dados={() => setValor(valor + 4)}/>
        <Botao valor="5" dados={() => setValor(valor + 5)}/>
        <Botao valor="6" dados={() => setValor(valor + 6)}/>
        <Botao valor="+" dados={() => setValor(valor + '+')} cor='cinza'/>
        <Botao valor="1" dados={() => setValor(valor + 1)}/>
        <Botao valor="2" dados={() => setValor(valor + 2)}/>
        <Botao valor="3" dados={() => setValor(valor + 3)}/>
        <Botao valor="-" dados={() => setValor(valor + '-')} cor='cinza'/>
        <Botao valor="0" dados={() => setValor(valor + 0)}/>
        <Botao valor="." dados={() => setValor(valor + '.')} cor='cinza'/>
        <Botao dados={() => setValor(valor + 'C')} cor='verde' img={backSpace}/>
        <Botao valor="=" dados={() => setValor(valor + '=')} cor='blue'/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teclado: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: 10,
    justifyContent: 'center',
    fontSize: 35
  },
});
