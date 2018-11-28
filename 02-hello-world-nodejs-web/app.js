/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Hello World NodeJS na página web
*/

// bibliotecas
var http = require ("http"); 	// servidor web
var ip = require("ip");			// saber ip da máquina

// criando um servidor
http.createServer(function (req, res) {
    
    // informando o tipo de conteúdo
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // mostrar uma mensagem
    res.end('Hello World, coloque seu nome! Bem-vindo ao NodeJS!');

// porta na qual o servidor estará escutando
}).listen(8080); 

// mensagem no console
console.log("Digite no seu navegador http://"+ ip.address() + ":8080");