import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './Botao';
import backSpace from '../backspace.png';
import { calcular, backspace } from '../backend/calculadora';
import BotaoGrande from './BotaoGrande'

export default function Calculadora() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const chamarBackspace = () => {
    const resposta = backspace(valor);

    setValor(resposta);
  }

  const chamarCalcular = () => {
    const retornoCalculo = calcular(valor);

    setResultado(retornoCalculo);

  }

  const limparTelas = () => {
    setValor('');
    setResultado('');
  }


  return (
    <View style={styles.telaCalc}>

      <View style={styles.telaVisor}>
        <Text style={styles.visor}>{valor}</Text>
        <Text style={styles.resposta}>{resultado}</Text>
      </View>

      <View style={styles.teclado}>
        <BotaoGrande valor='C' dados={limparTelas} />
        <Botao valor="%" dados={() => setValor(valor + '%')} cor='cinza'/>
        <Botao valor="÷" dados={() => setValor(valor + '/')} cor='cinza'/>
        <Botao valor="9" dados={() => setValor(valor + 9)}/>
        <Botao valor="8" dados={() => setValor(valor + 8)}/>
        <Botao valor="7" dados={() => setValor(valor + 7)}/>
        <Botao valor="x" dados={() => setValor(valor + '*')} cor='cinza'/>
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
        <Botao dados={chamarBackspace} cor='verde' img={backSpace}/>
        <Botao valor="=" dados={chamarCalcular} cor='azul'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teclado: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '60%',
    gap: 10,
    fontSize: 35,
    justifyContent: 'center',
  },
  visor: {
    color: 'gray',
    textAlign: 'right',
    fontSize: 20
  },
  resposta: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 40
  },
  telaVisor:{
    backgroundColor: '#1C2E48',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: '30%',
    width: '100%',
    justifyContent: 'center'
  },
  telaCalc:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '100%',
    gap: 20,
  }
});
