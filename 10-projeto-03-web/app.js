/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 03 – Mini Estação Meteorológica - NodeJS + Web
*/


// importando bibliotecas

// para trabalhar com páginas web
var app = require('express')();

//  para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// para criar conexão socket
var io = require('socket.io')(server);

// para saber ip da máquina
var ip = require("ip");  

// para acesso serial a placa Arduino
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

// abre a porta de comunicação
var port = new SerialPort('COM14', {
	baudRate: 9600
});

// variáveis

// formatador de conteúdo
const parser = port.pipe(new Readline({delimiter: '\r\n'}))


// servidor escutando na porta 8080
server.listen(8080);
// mensagem no console
console.log("Digite no seu navegador http://"+ ip.address() + ":8080/projeto-03-web.html");


// informando a página HTML que será vista pelo usuário
var express = require("express");

var router = express.Router();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use("/",router);

app.use(express.static(__dirname + '/views/'));

// quando alguém conectar com o servidor por meio de socket
io.on('connection', function (socket) {
    
  	// lê o conteúdo da porta serial
	parser.on('data', function (data) {
		// enviar resposta da leitura do cartão para a página web
    	socket.emit('respostaTemp', data);
      	socket.emit('respostaUmi', data);
      	socket.emit('respostaLum', data);
	});
});
