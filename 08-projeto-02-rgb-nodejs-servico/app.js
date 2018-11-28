/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 02 - Escolher cor usando LED RGB + Servico
*/

// importando bibliotecas
// para trabalhar com páginas web
var app = require('express')();

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// biblioteca para saber ip da máquina
var ip = require("ip");     

// informando a porta de comunicação
var board = new five.Board();

// variáveis

// mudar cor do LED RGB 
var rgb;

// indice para mudar cor
var indice = 0;
  
// lista de cores
var cores = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

// saber o id do loop para desabilitar depois
var idIntervalo;

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  app.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");
  console.log("festa: /festa");
  console.log("ligar vermelho: /ligarVermelho");
  console.log("ligar azul: /ligarAzul");
  console.log("ligar verde: /ligarVerde");
  console.log("desligar: /desligar");

  rgb = new five.Led.RGB([6, 5, 3]);

  // aguardando chamada /ligar para ligar LED
  app.get('/ligarVermelho', function (req, res) {
    // parar o loop da festa
    clearInterval(idIntervalo);

    // ligar LED na cor vermelha
    rgb.color("#FF0000")

    // retorna resposta
    res.json({resposta : 'LED ligado na cor vermelha'});
  });

  // aguardando chamada /ligar para ligar LED
  app.get('/ligarVerde', function (req, res) {
    // parar o loop da festa
    clearInterval(idIntervalo);

    // ligar LED na cor verde
    rgb.color("#00FF00")

    // retorna resposta
    res.json({resposta : 'LED ligado na cor verde'});
  });

  // aguardando chamada /ligar para ligar LED
  app.get('/ligarAzul', function (req, res) {
    // parar o loop da festa
    clearInterval(idIntervalo);

    // ligar LED na cor azul
    rgb.color("#000080")

    // retorna resposta
    res.json({resposta : 'LED ligado na cor azul'});
  });

  // aguardando chamada /desligar para desligar LED
  app.get('/desligar', function (req, res) {
    // parar o loop da festa
    clearInterval(idIntervalo);

    // desliga LED
    rgb.off();

    // retorna resposta
    res.json({resposta : 'LED desligado'});
  });

  app.get('/festa', function (req, res) {

    // chama a funcao tocarFesta
    idIntervalo = setInterval(function() {tocarFesta();}, 1000);
      
    res.json({resposta : 'Modo festa ligado :)'});
  });

});

function tocarFesta(){
  // mostrar cor
  rgb.color(cores[indice++]);
      
  // se o indice for igual ao tamanho do tamanho do vetor cores, 
  // reinicia a contagem a partir de zero
  if (indice === cores.length) {
    indice = 0;
  }
}
