import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Style } from "../components/estilo/Style";

export default class Turmaview extends Component {
    render() {
        return (

            <View >
                <Text style={Style.cadastroConcluido}>Cadastro {this.props.id} concluido</Text>

                <Text style={Style.bonecos}>👨🏽‍🎓👩🏽‍🎓</Text>
                <Text style={Style.lista}>➡️{this.props.nome}</Text>
                <Text style={Style.lista}>➡️{this.props.idade}</Text>
                <Text style={Style.lista}>➡️{this.props.turma}</Text>
                <Text style={Style.lista}>➡️{this.props.endereco}</Text>
                <Text style={[Style.lista,this.getStilo()]}> ➡️{this.props.aluno}</Text>
                <Text></Text>
             

                 <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{flex: 1, backgroundColor: 'red', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => this.props.deletar(this.props.id)}>
                        <Text style={{color: 'white'}}>  Remover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'blue', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => this.props.atualizado(this.props.id)}>
                        <Text style={{color: 'white'}}> Cadastrar </Text>
                    </TouchableOpacity>
                    </View>
            </View>
        )
    }

getStilo =() =>{
if(this.props.aluno == "🙄 Não Cadastrado"){
    return{color:'red'}

}else if (this.props.aluno == "🤩 Cadastrado"){
    return{color:'blue'}
}

}
}

