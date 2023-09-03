import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Botao from './Botao';
import backSpace from '../backspace.png';

export default function Temperatura(){

  const [fahrenheit, setFahrenheit] = useState('')
  const [kelvin, setKelvin] = useState('');
  const [valor, setValor] = useState('');


  const celsius = valor;

  const celsiusFahrenheit =  ((9 * celsius) / 5) + 32;

  const celsiusKelvin = celsius * 1 + 273.15;


  function retornaTemperaturas(){

    setFahrenheit(celsiusFahrenheit);

    setKelvin(celsiusKelvin);

  }

  return(
    <View style={styles.tela}>

      <View style={styles.visor}>
        <View style={styles.celsius}>
          <Text style={styles.icon}>Cº</Text>
          <Text style={styles.textoCelsius}>{ celsius }</Text>
          <Image source={require('../assets/img/termometro.png')} style={styles.img} />
        </View>

        <View style={styles.container}>
          <View style={styles.resultados}>
            <Text style={styles.icon}>Fahrenheit</Text>
            <Text style={ styles.temperatura }>{ fahrenheit }</Text>
            <Image source={require('../assets/img/sol.png')} style={styles.img} />
          </View>

          <View style={styles.resultados}>
            <Text style={styles.icon}>Kelvin</Text>
            <Text style={ styles.temperatura }>{ kelvin }</Text>
            <Image source={require('../assets/img/solnublado.png')} style={styles.img} />
          </View>
        </View>
      </View>

      <View style={styles.instrucoes}>
        <Text style={styles.textInstrucao}>INFORME UM VALOR EM CELSIUS</Text>
      </View>

      <View style={styles.teclado}>

        <Botao valor="1" dados={() => setValor(valor + 1)} cor='grande' />
        <Botao valor="2" dados={() => setValor(valor + 2)} cor='grande' />
        <Botao valor="3" dados={() => setValor(valor + 3)} cor='grande' />
        <Botao valor="4" dados={() => setValor(valor + 4)} cor='grande' />
        <Botao valor="5" dados={() => setValor(valor + 5)} cor='grande' />
        <Botao valor="6" dados={() => setValor(valor + 6)} cor='grande' />
        <Botao valor="7" dados={() => setValor(valor + 7)} cor='grande' />
        <Botao valor="8" dados={() => setValor(valor + 8)} cor='grande' />
        <Botao valor="9" dados={() => setValor(valor + 9)} cor='grande' />
        <Botao img={backSpace} dados={() => setValor(valor.slice(0, -1))} cor='grandeverde' />
        <Botao valor="0" dados={() => setValor(valor + 0)} cor='grandeazul' />
        <Botao valor="=" dados={ retornaTemperaturas } cor='grandeverde2' />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  tela: {
    marginTop: 10,
    width: '100%',
    height: '90%',
  },
  temperatura: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  teclado: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    bottom: 0,
    flex: 1,
    width: '100%',
    height: '60%',
    gap: 10
  },
  instrucoes: {
    width: '100%',
    height: '6%',
    backgroundColor: '#1C2E48',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 12
  },
  textInstrucao: {
    color: '#7A9FE5',
    fontWeight: 'bold'
  },
  visor: {
    height: '34%',
    width: '100vw',
    backgroundColor: '#1C2E48',
    borderRadius: 10,
    marginBottom: 12,
    padding: 12
  },
  celsius: {
    justifyContent: 'space-around',
    backgroundColor: '#0D1422',
    width: '100vw',
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  icon: {
    color: '#2BD7D9',
    fontWeight: 'bold'
  },
  textoCelsius: {
    color: "#FFF",
  },
  resultados: {
    backgroundColor:"#364F6B",
    height: '72%',
    width: '48%',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    padding: 12
  },
  container: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
