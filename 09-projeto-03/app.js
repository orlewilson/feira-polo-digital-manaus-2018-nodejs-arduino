/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 03 – Mini Estação Meteorológica - NodeJS
*/

// importando bibliotecas
// para acesso serial a placa Arduino
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

// abre a porta de comunicação (não se esqueca de mudar a porta)
var port = new SerialPort('COM14', {
	baudRate: 9600
});

// variáveis

// formatador de conteúdo
const parser = port.pipe(new Readline({delimiter: '\r\n'}))

// lê o conteúdo da porta serial
parser.on('data', function (data) {
	// mostra os dados no console lidos pela porta serial do arduino
	console.log(data);    
});