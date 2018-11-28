/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Ligar/desligar LED com NodeJS
*/

// bibliotecas
// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação (não se esquecer de mudar porta)
//var board = new five.Board({port: "COM14"}); // porta definida
var board = new five.Board(); // tenta detectar automaticamente

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   // placa pronta
   console.log("Placa Arduino pronta!");  
   
   // informando que utilizará Led e qual porta
   var led = new five.Led(13); 
    
   // liga/desliga a cada 1s
   led.blink(1000);  
});