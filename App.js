import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';

import Item from './src/components/models/Item';
import Itemdatabase from './src/components/dataBase/Itemdatabase';
import { Style } from './src/components/estilo/Style';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    nome:"pos",
    idade:"",
    endereco:"ola",
    turma:"",
    lista: [],
    }
 
  }

  Listar = () => {
    const db = new Itemdatabase();
    db.Listar().then(
      dados => {
        this.setState({ lista: dados })
      }
    )
  }

  Cadastrar = (nome,idade,turma,endereco) => {
    const db = new Itemdatabase();
    const NovoItem = new Item(nome,idade,turma,endereco);
    db.Cadastrar(NovoItem)
  }

  render() {
    return (
      <View style={Style.container}>
        <TouchableOpacity onPress={()=> this.Cadastrar(this.state.nome,this.state.endereco,this.state.idade,this.state.turma)}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.Listar()}>
          <Text style={Style.escrita}>Aprendendo SQLite</Text>
        </TouchableOpacity>
       
       {
        this.state.lista.map(
        Item => (<Text>{Item.id},{Item.nome},{Item.idade},{Item.turma},{Item.endereco}</Text>)
        )
       }
      </View>
    )
  }
}

