import React,{Component} from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { Style } from "../components/estilo/Style";

export default class Turmaview extends Component{
    render(){
        return(
            <View >
                <Text style={Style.cadastroConcluido}>Cadastro {this.props.id} concluido</Text>
                
                <Text style={Style.lista}>👨🏽‍🎓👩🏽‍🎓</Text>
                <Text style={Style.lista}>Nome:{this.props.nome}</Text>
                <Text style={Style.lista}>Idade:{this.props.idade}</Text>
                <Text style={Style.lista}>Turma:{this.props.turma}</Text>
                <Text style={Style.lista}>Endereço:{this.props.endereco}</Text>
                <Text></Text>
            </View>
        )
    }
}
