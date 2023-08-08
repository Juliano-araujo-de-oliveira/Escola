import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView, Button,TextInput,} from 'react-native';

import Item from './src/components/models/Item';
import Itemdatabase from './src/components/dataBase/Itemdatabase';
import { Style } from './src/components/estilo/Style';
import Turmaview  from './src/lista/Turmaview';


export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
    nome:"Não Especificado",
    idade:0,
    endereco:"Não Especificado",
    turma:0,
    aluno:"🙄 Não Cadastrado",
   lista: []
   
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

  
  Cadastrar = (nome,idade,turma,endereco,aluno) => {
    const db = new Itemdatabase();
    const NovoItem = new Item(nome,idade,turma,endereco,aluno);
    db.Cadastrar(NovoItem)
    this.Listar();
  }

Remover = (id) => {
const db = new Itemdatabase();
db.Remover(id);
this.Listar();
};

Atualizar = (id) => {
const db = new Itemdatabase();
db.Atualizar(id);
this.Listar();
}

render() {
    return (
   
      <View style={Style.container}>
       <TextInput  onChangeText={(textoDigitado) => this.setState({nome:textoDigitado})} placeholder='Nome'/>
       <TextInput  onChangeText={(textoDigitado) => this.setState({idade:textoDigitado})}placeholder='Idade' />
       <TextInput  onChangeText={(textoDigitado) => this.setState({turma:textoDigitado})}placeholder='Turma '/>
       <TextInput  onChangeText={(textoDigitado) => this.setState({endereco:textoDigitado})}placeholder='Endereco'/>
  
      
        <TouchableOpacity onPress={()=> this.Cadastrar(this.state.nome,this.state.idade,this.state.turma,this.state.endereco,this.state.aluno)}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <ScrollView>
      
        {
        this.state.lista.map(
        item => (
      <Turmaview
          id={item.id}
          nome={item.nome}
          idade={item.idade}
          endereco={item.endereco}
          turma={item.turma}
           aluno={item.aluno}

          atualizado={this.Atualizar}
          deletar={this.Remover}
       
          />
        )
        )
       }
          </ScrollView>
       </View>
     
      
    )

  }

}

