// var videosGames = [ 'Switch', 'Ps4', 'Xbox'];

// // isso é loop 
for (var numero = 1; numero <= 10; numero++){
    console.log(numero)
}


// var i = 0;
// while (i <=10){ console.log(i)};
// i = i + 5;

var videosGames = [ 'Switch', 'PS4', 'XBOX', '3DS'];

// for (var item = 0; item< 4; item++){
//     console.log(item);
// }

for(var item = 0; item < videosGames.length; item++){
    console.log(videosGames[item]);
    if(videosGames[item] === 'PS4'){
        break; 
    }
}

videosGames.forEach(function(item)
{
    console.log(item)
});


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasGanhas = [ 1959, 1962, 1070, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`


for(var item = 0; item <= copasGanhas.length; item++){
    console.log(`O brasil ganhou a copa de ${copasGanhas[item]}`);
    if(copasGanhas[item] === 1962){
        break;
    }
}
// copasGanhas.forEach(function(item){
//     console.log(item)
// });



// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
