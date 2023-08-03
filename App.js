import React,{Component} from 'react';
import {  Text, View, TouchableOpacity, Button } from 'react-native';

import Itemdatabase from './src/components/dataBase/Itemdatabase';
export default class App extends Component {


testarConexao = () => {
const db = new Itemdatabase();
db.Conectar();
db.Desconectar();
}





render(){
  return(
    <View>
      <TouchableOpacity onPress={() => this.testarConexao()}>
      <Text>Aprendendo SQLite</Text>
      </TouchableOpacity>
    </View>
  )
}
}

