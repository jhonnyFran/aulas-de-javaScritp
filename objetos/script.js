  var pessoa = {
      nome: 'jhonny',
      idade: 23,
      cidade: 'cajari',

  }

  console.log(pessoa)

  var quadrado = {
      lados: 4,
      area: function(lado){
          return lado * lado;
      },
      perimetro: function(lado){
          return this.lados * lado;
      }
  }

// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));


 // Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'jhonny',
    sobrenome: 'muniz',
    idade: 24,
    cidade: 'cajari',

}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;


  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
     latir(pessoa){
        if(pessoa === 'homen'){
            return 'latir';

        } else{
            return 'nada';
        }
  }
}

// ainda falando de objetos



// nomeie 3 propriedades ou métodos de strings
var nome = 'jhonny'
// length
// indexOf
// match
 
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')
// addEventListener
// appendChild
// id
// innerHTML
// outerHTML
console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
