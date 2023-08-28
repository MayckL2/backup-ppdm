import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Teclado from './teclado'

export default function Calculadora(){
  return(
    <View>
      <Text>
        SCREEN Calculadora

        <Teclado valor='abroba'/>

      </Text>
    </View>
  )
}