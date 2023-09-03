import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



export default function Linha({medida, valor, icon}) {
  
    let corFundo = '#294268'

    if (medida == 'M') {
        corFundo = '#0D1422'
    }

    const styles = StyleSheet.create({
        linha : {
            backgroundColor: corFundo,
            width: '90%',
            height: '11%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: '100px',
            flexDirection: 'row',
            borderRadius: 10

        },

        medida: {
            color: '#2BD7D9',
            fontWeight: '600'
        }

    })

    return (
        <View style={styles.linha}>
            <Text style={styles.medida}>{ medida }  </Text> 
            <Text style={{color: '#fff'}}>{ valor }</Text>
            <Image source={ icon }>
            </Image>
        </View>
    )
}
