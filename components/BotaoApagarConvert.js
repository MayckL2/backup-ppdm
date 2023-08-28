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

  return (
      <TouchableOpacity style={styles.botaoVerde} onPress={dados}>
        {valor}
        <Image source={img} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  botaoVerde: {
    backgroundColor: '#219495',
    width: 210,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
