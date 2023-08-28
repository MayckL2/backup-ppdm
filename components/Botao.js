import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

export default function Botao({ valor, dados, cor, img, convert }) {
  // diferencia qual a cor do botão
  function escolhaBotao(e) {

    if (convert == 'true') {
      return (
        <TouchableOpacity style={styles.botaoConvert} onPress={dados}>
          {valor}
        </TouchableOpacity>
      );
    } else {
      if (e == 'verde') {
        return (
          <TouchableOpacity style={styles.botaoVerde} onPress={dados}>
            {valor}
            <Image source={img} />
          </TouchableOpacity>
        );
      } else if (e == 'azul') {
        return (
          <TouchableOpacity style={styles.botaoAzul} onPress={dados}>
            {valor}
            <Image source={img} />
          </TouchableOpacity>
        );
      } else if (e == 'cinza') {
        return (
          <TouchableOpacity style={styles.botaoCinza} onPress={dados}>
            {valor}
            <Image source={img} />
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity style={styles.botao} onPress={dados}>
            {valor}
            <Image source={img} />
          </TouchableOpacity>
        );
      }
    }
  }

  return (
    escolhaBotao(cor)

  );
}

const styles = StyleSheet.create({
  botao: {
    width: 70,
    height: 70,
    backgroundColor: '#1C2E48',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoVerde: {
    backgroundColor: '#219495',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCinza: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAzul: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoConvert: {
    backgroundColor: '#1C2E48',
    width: 100,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // botaoVerdeConvert:{
  //   backgroundColor: '#219495',
  //   width: 210,
  //   height: 70,
  //   color: 'white',
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
});
