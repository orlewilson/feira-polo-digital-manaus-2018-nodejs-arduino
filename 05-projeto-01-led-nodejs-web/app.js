/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Ligar/desligar LED com NodeJS + Página Web
*/

// importando bibliotecas
// para trabalhar com páginas web
var app = require('express')();

// para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// para criar conexão socket
var io = require('socket.io')(server);

// para comunicar com o Arduino
var five = require("johnny-five");  

// para saber ip da máquina
var ip = require("ip");     

// informando a porta de comunicação
var board = new five.Board();
 
// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  server.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");

  // informando que utilizará Led e qual porta
  var led = new five.Led(13);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/projeto-01-led-nodejs-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      // ligar LED
      led.on();

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('respostaLed', 'ligado');
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      // desligar LED
      led.off();

      // enviar resposta ao solicitante que o LED foi desligado
      socket.emit('respostaLed', 'desligado');
    });
  });
}); 