//Exercício - 01
let fat = 10;
let temp = fat;

for(let i = fat; i >= 1; i-=1){
  if(i != 1){
    temp *= (i-1);  //O valor vai começar 9 pois a variável temp já armazenar o valor de 10
  }
}
console.log(`O fatorial de ${fat}! é: ${temp}.`);