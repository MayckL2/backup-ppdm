import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';

import Calculadora from './components/calculadora';
import Medida from './components/Medida';
import Temperatura from './components/Temperatura';

function App() {
  const [tela, setTela] = useState('Calculadora');
  const [btnCor, setBtnCor] = useState(styles.selected)
  const [btnCor1, setBtnCor1] = useState(styles.headerBtn)
  const [btnCor2, setBtnCor2] = useState(styles.headerBtn)

  // MUDA COR DO BOTAO AO TROCAR DE TELA
  useEffect(()=>{
    if(tela == 'Calculadora'){
      setBtnCor(styles.selected)
      setBtnCor1(styles.headerBtn)
      setBtnCor2(styles.headerBtn)
    }else if(tela == 'Medida'){
      setBtnCor(styles.headerBtn)
      setBtnCor1(styles.selected)
      setBtnCor2(styles.headerBtn)
    }else if(tela == 'Temperatura'){
      setBtnCor(styles.headerBtn)
      setBtnCor1(styles.headerBtn)
      setBtnCor2(styles.selected)
    }
  }, [tela])
  
  // MUDA TELA A SER RENDERIZADA
  function telaAberta(e) {
    
    if (tela == 'Calculadora') {
      return <Calculadora />;
    } else if (tela == 'Medida') {
      return <Medida />;
    } else if (tela == 'Temperatura') {
      return <Temperatura />;
    }
  }

  return (
    <View style={styles.fundo}>
      <StatusBar hidden={true}/>

      <View style={styles.header}>
        <Text style={btnCor} onPress={() => setTela('Calculadora')}>Calculadora</Text>
        <Text style={btnCor1} onPress={() => setTela('Medida')}>Medida</Text>
        <Text style={btnCor2} onPress={() => setTela('Temperatura')}>Temperatura</Text>
      </View>

      <View style={styles.tela}>{telaAberta(tela)}</View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '6%',
    width: '100%',
    backgroundColor: '#1C2E48',
    position: 'relative',
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: '2%'
  },

  tela: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0D1422',
    width: '100%',
    height: '100%'
  },
  fundo:{
    paddingHorizontal: 10, 
    height: '100px',
    backgroundColor: '#0D1422'
  },
  headerBtn:{
    // backgroundColor: '#1C2E48',
    flexGrow: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
  selected:{
    backgroundColor: '#219495',
    flexGrow: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  }
});
