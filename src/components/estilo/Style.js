import { StyleSheet } from "react-native";

const Style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5F9EA0',

    },

   
    listacadastro: {
        margin: 2,
        fontSize: 15,
        color: '#000000',

    },

    relogio:{
        fontSize:30,
        textAlign:'center',
        color:'black'
    },

    BotaoRemoverLista: {
        flex: 1,
        backgroundColor: 'red',
        margin: 1,
        padding: 3,
        alignItems: 'center'
    },

    BotaoCadastroLista: {
        flex: 1,
        backgroundColor: '#0000CD',
        margin: 1,
        padding: 3,
        alignItems: 'center'
    },

    BotaoCadastrarInput: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#000000',
        borderWidth: 5, color: '#FFFFFF',
        padding: 5,
        margin: 20,
        borderRadius: 20
    },

    Telainput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        borderWidth: 10,
        margin: 20

    },

    EscritaInput: {
        color: '	#000000',
        fontSize: 30,
        fontStyle: 'italic',
        textAlign: 'center',

    },

    BorderLista: {
        borderWidth: 10,
        borderRadius: 20,
        margin: 5,
       
        backgroundColor: '#00FFFF'
    },

    cadastroConcluido: {
        fontStyle: 'italic',
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'underline',
        margin: 5,
        color: 'black'
    },
    bonecos: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10
    }
})

export { Style }