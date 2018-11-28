/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 03 – Mini Estação Meteorológica - NodeJS + Servico
*/

// importando bibliotecas
// para trabalhar com páginas web
var app = require('express')();

// para saber ip da máquina
var ip = require("ip");  

// importando bibliotecas
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

// armazena valores temperatura, umidade e luminosidade, respectivamente
var temp, umi, lumi;

// servidor escutando na porta 8080
app.listen(8080);
  
console.log("Digite no seu navegador http://"+ ip.address() + ":8080");
console.log("Saber valor temperatura: /temp");
console.log("Saber valor umidade: /umi");
console.log("Saber valor luminosidade: /lumi");
console.log("Saber valor todos: /todos");


// lê o conteúdo da porta serial
parser.on('data', function (data) {

  // mostra os dados no console lidos pela porta serial do arduino
  console.log(data);

  // obtem o arquivo JSON e ler cada parâmetro
  var obj = JSON.parse(data);
  temp = obj.Temperatura;
  umi = obj.Umidade;
  lumi = obj.Luminosidade;
});

// aguardando chamada /todos 
app.get('/todos', function (req, res) {
  res.json({temperatura: temp, umidade: umi, luminosidade: lumi});
});

// aguardando chamada /temp 
app.get('/temp', function (req, res) {
  res.json({temperatura: temp});
});

// aguardando chamada /umi 
app.get('/umi', function (req, res) {
  res.json({umidade: umi});
});

// aguardando chamada /lumi 
app.get('/lumi', function (req, res) {
  res.json({luminosidade: lumi});
});
