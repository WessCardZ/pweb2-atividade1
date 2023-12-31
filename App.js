import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// Atividade PROPS

const Campus = ({nome, anoFundacao}) => {
  return(
    <Text>O campus {nome} foi fundado em {anoFundacao}</Text>
  );
}

const InstitutoFederal = ({sigla, uf}) =>{
  return(
    <Text>{sigla} - {uf}</Text>
  );
}

function App1() {
  return (
    <View style={styles.container}>

      <InstitutoFederal sigla="IFAL" uf="AL"/>
      <Campus nome="Maceió" anoFundacao={1909}/>
      <Campus nome="Rio Largo" anoFundacao={2014}/>
      <Campus nome="Satuba" anoFundacao={1905}/>

      <InstitutoFederal sigla="IFPE" uf="PE"/>
      <Campus nome="Palmares" anoFundacao={2014}/>
      <Campus nome="Garanhuns" anoFundacao={2010}/>

      <StatusBar style="auto" />

    </View>
  );
}

// Fim da atividade PROPS

// Atividade STATE

function App2(){
  const [cliques, setCliques] = useState(0)

  return(
    <View style={styles.container}>

      <Button title='OK' onPress={() => {
        setCliques(cliques + 1)
      }}/>

      <Text>Quantidade de cliques: {cliques}</Text>
   </View>
  )
}

// Fim da atividade STATE

export default App2;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
