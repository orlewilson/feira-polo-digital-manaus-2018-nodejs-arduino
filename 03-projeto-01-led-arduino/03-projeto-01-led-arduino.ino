/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino
  Feira Polo Digital de Manaus - 28/11/2018
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      27/11/2018
  Data Atualizacao:  27/11/2018
  Descricao:         Projeto 01 - Ligar/desligar LED com Arduino
*/

// Porta digital no qual sera colocado um LED para ser ligado e desligado
int led = 13;

// Funcao para configurar o Arduino
void setup() {                

  // Indica qual porta digital sera utilizada como saida (ligar/desligar um LED)
  pinMode(led, OUTPUT);     
}

// Funcao principal do Arduino que ficara em loop infinito
void loop() {
  // Funcao do Arduino para ligar o LED (colocar nivel alto, ou seja, 5V)
  digitalWrite(led, HIGH);

  // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000); // 1 segundo

  // Funcao do Arduino para desligar o LED (colocar nivel baixo, ou seja, 0V)  
  digitalWrite(led, LOW);
  
  // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000); // 1 segundo
}
