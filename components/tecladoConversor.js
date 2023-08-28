import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './Botao';
import BotaoApagar from './BotaoApagarConvert'
import backSpace from '../backspace.png'

export default function Teclado() {
  const [valor, setValor] = useState('');

  return (
    <View>
      <Text>{valor}</Text>
      
      <Text style={styles.teclado}>
        <Botao valor="9" dados={() => setValor(valor + 9)} convert='true'/>
        <Botao valor="8" dados={() => setValor(valor + 8)} convert='true'/>
        <Botao valor="7" dados={() => setValor(valor + 7)} convert='true'/>
        <Botao valor="4" dados={() => setValor(valor + 4)} convert='true'/>
        <Botao valor="5" dados={() => setValor(valor + 5)} convert='true'/>
        <Botao valor="6" dados={() => setValor(valor + 6)} convert='true'/>
        <Botao valor="1" dados={() => setValor(valor + 1)} convert='true'/>
        <Botao valor="2" dados={() => setValor(valor + 2)} convert='true'/>
        <Botao valor="3" dados={() => setValor(valor + 3)} convert='true'/>
        <Botao valor="0" dados={() => setValor(valor + 0)} convert='true'/>
        <BotaoApagar img={backSpace}/>
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
