//Importação do plugin SQLite
import SQLite from "react-native-sqlite-storage"; 
SQLite.DEBUG(true); 
SQLite.enablePromise(true);

//Variáveis de conexão/criação do banco de dados 
const database_name = "Reactoffline.db"; //Nome do banco de dados
const database_version = "1.0"; //Versão do banco de dados
const database_displayname = "SQLite React Offline Database"; //Nome de exibição do banco de dados
const database_size = 200000; //tamanho do banco de dados

//Função de inicialização do Banco de Dados
export default class Database { 
  Conectar() {  
        let db;
        return new Promise((resolve) => {    
            console.log("Checando a integridade do plugin ...");    
            SQLite.echoTest().then(() => {        
                console.log("Integridade Ok ...");        
                console.log("Abrindo Banco de Dados ...");        
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                    db = DB;            
                    console.log("Banco de dados Aberto");            
                    db.executeSql('SELECT 1 FROM Item LIMIT 1').then(() => {
                        console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                    }).catch((error) =>{
                        console.log("Erro Recebido: ", error);
                        console.log("O Banco de dados não está pronto ... Criando Dados");
                        db.transaction((tx) => {
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Produtos (id,nome,idade,turma,endereco)');
                        }).then(() => {
                            console.log("Tabela criada com Sucesso");                
                        }).catch(error => {                    
                            console.log(error);                
                        });            
                    });            
                resolve(db);          
            }).catch(error => {           
                console.log(error);          
            });      
        }).catch(error => {        
            console.log("echoTest Falhou - plugin não funcional");      
        });    
    }); 
};

 //Função para fechar a Conexão com o Banco de dados
Desconectar(db) {  
    if (db) {    
        console.log("Fechando Banco de Dados");    
        db.close().then(status => {        
            console.log("Banco de dados Desconectado!!");      
        }).catch(error => {        
            this.errorCB(error);      
        });  
    } else {    
        console.log("A conexão com o banco não está aberta");  
    } 
};
                        

}