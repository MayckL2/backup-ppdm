import { useState } from 'react';
import Botao from './Botao';
import backSpace from '../backspace.png';

import { View, Text, StyleSheet, Button } from 'react-native';
import Linha from './linha'

export default function Medida(){
  let [valor, setValor] = useState('')
  return(

    <View style={style.body}>
      <View style={style.fundo}>
        <Linha medida={ 'KM' } valor={valor / 1000} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'HM' } valor={valor / 100} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'DAM' } valor={valor / 10} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'M' } valor={valor } icon={ require('../assets/img/lapis.png')  } />
        <Linha medida={ 'DM' } valor={valor * 10} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'CM' } valor={valor * 100} icon={ require('../assets/img/regua.png') } />
        <Linha medida={ 'MM' } valor={valor * 1000} icon={ require('../assets/img/regua.png') } />
      </View>
      <View style={style.teclado}>
        <Botao valor="1" dados={() => setValor(valor + '1')} cor='grande'/>
        <Botao valor="2" dados={() => setValor(valor + '2')} cor='grande' />
        <Botao valor="3" dados={() => setValor(valor + '3')} cor='grande' />
        <Botao valor="4" dados={() => setValor(valor + '4')} cor='grande' />
        <Botao valor="5" dados={() => setValor(valor + '5')} cor='grande' />
        <Botao valor="6" dados={() => setValor(valor + '6')} cor='grande' />
        <Botao valor="7" dados={() => setValor(valor + '7')} cor='grande' />
        <Botao valor="8" dados={() => setValor(valor + '8')} cor='grande' />
        <Botao valor="9" dados={() => setValor(valor + '9')} cor='grande' />
        <Botao img={backSpace} dados={() => setValor(valor.slice(0, -1))} cor='grandeverde' />
        <Botao valor="0" dados={() => setValor(valor + 0)} cor='grandeazul' />

      </View>
    </View>

  )
}

const style = StyleSheet.create({

  body : {
    height: '94%',
    width: '100%',
    alignItems: 'center',
    gap: 10
  }, 

  fundo: {
    backgroundColor: '#1C2E48',
    width: '90%', 
    height: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 10,
    gap: 8, 
    borderRadius: 10
  },

  teclado: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    bottom: 0,
    flex: 1,
    height: '60%',
    gap: 10
  },
})