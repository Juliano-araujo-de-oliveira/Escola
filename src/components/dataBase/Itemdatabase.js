//Importação do plugin SQLite
import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

//Variáveis de conexão/criação do banco de dados 
const database_name = "Escola.db"; //Nome do banco de dados
const database_version = "1.0"; //Versão do banco de dados
const database_displayname = "SQLite React Offline Database"; //Nome de exibição do banco de dados
const database_size = 200000; //tamanho do banco de dados

//Função de inicialização do Banco de Dados
export default class Itemdatabase {
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
                    }).catch((error) => {
                        console.log("Erro Recebido: ", error);
                        console.log("O Banco de dados não está pronto ... Criando Dados");
                        db.transaction((tx) => {
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Item (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(30), idade INTEGER, turma INTEGER, endereco VARCHAR(30),aluno VARCHAR(50))');
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
    }

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




    //Função para listar itens da tabela produtos
    Listar() {
        return new Promise((resolve) => {
            const lista = [];
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Item;', []).then(([tx, results]) => {
                        console.log("Consulta completa");
                        let len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { id, nome, idade, turma, endereco, aluno } = row;
                            lista.push({ id, nome, idade, turma, endereco, aluno });
                        }
                        console.log(lista);
                        resolve(lista);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    // Função para acrescentar um novo produto na tabela
    Cadastrar(item) {
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para inserir um novo produto   
                    tx.executeSql('INSERT INTO Item (nome,idade,turma,endereco,aluno) VALUES (?, ?, ?, ?,?)', [item.nome, item.idade, item.turma, item.endereco, item.aluno]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    //Função para excluir um dado do banco pela id
    Remover(id) {
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para deletar um item da base de dados    
                    tx.executeSql('DELETE FROM Item WHERE id = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    Atualizar(id) {
        //Função para atualizar um dado que já foi escrito anteriormente no banco de dados a partir da sua id

        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para atualizar um dado no banco        
                    tx.executeSql('UPDATE Item SET aluno = "🤩 Cadastrado" WHERE id = ?', [id]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}



