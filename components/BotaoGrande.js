import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Image,
} from 'react-native';

export default function Botao({ valor, dados, cor, img }) {


    return (
        <TouchableOpacity style={styles.botao} onPress={dados}>
            <Text style={styles.texto}>{valor}</Text>
            <Image source={img} />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    botao: {
        width: 150,
        height: 70,
        backgroundColor: '#219495',
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        color: 'white',
        fontSize: 30
    }
});