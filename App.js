import React,{Component} from 'react';
import {  Text, View, TouchableOpacity, Button } from 'react-native';

import Itemdatabase from './src/components/dataBase/Itemdatabase';
import { Style } from './src/components/estilo/Style';
export default class App extends Component {


testarConexao = () => {
const db = new Itemdatabase();
db.Conectar();
db.Desconectar();
}





render(){
  return(
    <View style={Style.container}>
      <TouchableOpacity onPress={() => this.testarConexao()}>
      <Text style={Style.escrita}>Aprendendo SQLite</Text>
      </TouchableOpacity>
    </View>
  )
}
}

