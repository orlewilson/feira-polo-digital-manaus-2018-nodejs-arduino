/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 02 - Escolher cor usando LED RGB
*/

// importando bibliotecas

// para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board();
 
// variáveis

// mudar cor do LED RGB 
var rgb;

// indice para mudar cor
var indice = 0;
  
// lista de cores
var cores = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];


// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // informando que utilizará Led RGB em quais portas PWM
  rgb = new five.Led.RGB([6, 5, 3]);
  
  // chama a funcao tocarFesta
  setInterval(function() {tocarFesta();}, 1000);
  
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