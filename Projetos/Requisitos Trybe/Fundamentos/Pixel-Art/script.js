

//Armazena as Cores da Paleta 
//let arrayPaletaCores = [];


 //var contPaleta = 0; //Inicializando a variável //Criando as variáveis globais, pois podem ser acessadas de qualquer função no programa.
 //var linTabela = 0; //Variável global, armazena a quantidde de linhas da ultima tabela criada com sucesso.


 function corAleatorio(){
    
    let numRed = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255
    let numGreen = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255
    let numBlue = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255
    return "rgb("+numRed+", "+numGreen+", "+numBlue+")";
}

//Inicialização Padrão das Cores - Cor0
function corPadrao(){
    const paletaCores = document.querySelectorAll(".color");
    for(let i = 0; i < 4; i++){
        if(i == 0){
            paletaCores[i].style.backgroundColor = "rgb(0, 0, 0)";
        }else{
            let temp = corAleatorio();
        paletaCores[i].style.backgroundColor = temp;
        } 
    }
}
corPadrao(); //Chamando a Função para inicializar a Paleta de Cores - Cor0

var corSelecionada = 'background-color: rgb(0, 0, 0);'; //Cor selecionada é uma variável global

const alterandoClasse = document.getElementById('color-palette');
alterandoClasse.children[0].classList.add('selected'); // começa com a classe selected

function corUsuario(){ //Função criada para adicionar o background-color na div paleta_criar_cor
    let numRed = Number(document.querySelector("#range_red").value); //converte os valores do input range para number
    let numGreen = Number(document.querySelector("#range_green").value); //converte os valores do input range para number
    let numBlue = Number(document.querySelector("#range_blue").value); //converte os valores do input range para number

    let paletaUsuario = document.getElementById("paleta_criar_cor");
    
    paletaUsuario.style.backgroundColor = "rgb("+numRed+" ,"+numGreen+" ,"+numBlue+")"; // a div vai ter o background com a cor criada pelo usuario
}

 //Remover class selected
 function removerClasse(){
    const paletaCores = document.getElementById('color-palette');
    for(let i = 0; i < paletaCores.childElementCount; i += 1){
        paletaCores.children[i].classList.remove('selected'); //irá remover a classe selected 
        console.log(corSelecionada)  
    }
 }

const opcoesPaleta = document.getElementsByName("radio_paleta"); //Seleciona todos os inputs[0,1,2]

function eventoPaletaUsuario(){
    let paletaUsuario = document.getElementById("paleta_criar_cor");
    corSelecionada = paletaUsuario.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada. //A variavel global corSelecionada vai armazendar a cor criada pelo usuario
}

function eventoPaletaAleatorio(){
    let paletaUsuario = document.getElementById("paleta_criar_cor");
    corSelecionada = paletaUsuario.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada. //A variavel global corSelecionada vai armazendar a cor criada pelo usuario 
}

function eventoPadrao(e){    
    //Chama a função removerClasse, toda vez que clicar em uma cor vai retirar a classe select de todas.
    removerClasse()

    const paletaCores = document.querySelectorAll(".color");  // seleciona a paleta de cores

    corSelecionada = e.target.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada.
    e.target.classList.add('selected'); // adiciona a classe selecet no elemento da paleta
}

const paletaCores = document.querySelectorAll(".color");

//Adicionar Evento
for(let i = 0; i < 4; i += 1){
    paletaCores[i].addEventListener("click", eventoPadrao); 
}         

//Apagando a Tabela
function reiniciarTabela(){
    //const divTabela = document.querySelectorAll(".pixel"); //Vai selecionar todos as div's que possuem a classe .pixel
    //for(let i = 0; i < divTabela.length; i++){
     //   divTabela[i].setAttribute("style","backgroundColor: white;"); //Alterando o a propriedade CSS referente a cor de fundo da div.
   //}
    const tabela = document.getElementById("pixel-board");
    const numLinha = document.querySelector('#pixel-board').childElementCount; //Quantidde de LInhas na tabela
    if(((numLinha >= 1) && (numLinha <= 10))){
        for(let i = 0; i < numLinha; i += 1){
            let temp = document.getElementById("lin_"+i);
            tabela.removeChild(temp);
        }
    }else{
        for(let i = 0; i < linTabela; i++){ //Utiliza a variavel linTabela que armazena a quantidade de linhas da ultima tabela criada com sucesso.
            let temp = document.getElementById("lin_"+i);
            tabela.removeChild(temp);
        }
    }
}

function tabelaInicial(){ //Gerar tabela com o tamanho 5x5 (25elemntos)
    const tabela = document.getElementById("pixel-board");

    for (let i = 0; i < 5; i += 1) {
        // cria a div container de cada linha
        let divLinha = document.createElement('div');
        // seta o id no lugar certo
        divLinha.setAttribute("id","lin_"+i); //Cada uma das Linhas vai receber um id
        divLinha.className ='divLinha';
        tabela.appendChild(divLinha);
        for (let j = 0; j < 5; j += 1) {
            // cria cada elemento (div) no segundo loop
            let divElemento = document.createElement("div");    
            divElemento.setAttribute("id","lin_"+i+"_"+j); //Cada uma das elemmento vai receber um id
            divElemento.className ='pixel';
            divElemento.style.backgroundColor = 'white';
            divLinha.appendChild(divElemento);
        }
    }
}

//Chamando a Função tabelaInicial
tabelaInicial();
//Criando evento adicionar cor tabela
function adicionarCor(){
    //Colorindo a tabela
    const divTabela = document.querySelectorAll(".pixel"); //Vai selecionar todos as div's que possuem a classe .pixel
   
    for(let i = 0; i < divTabela.length; i++){//A repetição vai ocorrer na quantidade de div's
        divTabela[i].addEventListener("click", function(){
            this.style = corSelecionada; //o this se refere ao elemento que está sendo clicado //Foi utilizada a variavel corSelecionada com o valor armazendo do style. 
        }, false);
    }  
}
//Chamando a função adicionar Cor
adicionarCor();

function corBrancaTabela(){
    const divTabela = document.querySelectorAll(".pixel");
    for(let i = 0; i < divTabela.length; i += 1) {
        divTabela[i].style.backgroundColor = 'white';
    }
}

const btnLimpar = document.querySelector("#clear-board"); //Botão Avançar
btnLimpar.addEventListener('click', corBrancaTabela);

function tamanhoTabela(){
    const linha = Number(document.querySelector('#board-size').value);
    const tabela = document.getElementById("pixel-board");
    console.log(linha)
    if(linha !== 0){ /* Caso seja verdadeiro irá criar a tabela, caso contrario irá apresentar mensagem de erro */
        if(linha <= 5){
            reiniciarTabela();
            tabelaInicial();
        }else if((linha > 5) && (linha <= 50)){
            reiniciarTabela();
            for (let i = 0; i < linha; i += 1) {
                // cria a div container de cada linha
                let divLinha = document.createElement('div');
                // seta o id no lugar certo
                divLinha.setAttribute("id","lin_"+i); //Cada uma das Linhas vai receber um id
                tabela.appendChild(divLinha);
                for (let j = 0; j < linha ; j += 1) {
                    // cria cada elemento (div) no segundo loop
                    let divElemento = document.createElement("div");    
                    divElemento.setAttribute("id","lin_"+i+"_"+j); //Cada uma das elemmento vai receber um id
                    divElemento.className ='pixel';
                    divElemento.style.backgroundColor = 'white';
                    divLinha.appendChild(divElemento);
                }
            }
        } else{
            reiniciarTabela();
            for (let i = 0; i < 50; i += 1) {
                // cria a div container de cada linha
                let divLinha = document.createElement('div');
                // seta o id no lugar certo
                divLinha.setAttribute("id","lin_"+i); //Cada uma das Linhas vai receber um id
                tabela.appendChild(divLinha);
                for (let j = 0; j < 50 ; j += 1) {
                    // cria cada elemento (div) no segundo loop
                    let divElemento = document.createElement("div");    
                    divElemento.setAttribute("id","lin_"+i+"_"+j); //Cada uma das elemmento vai receber um id
                    divElemento.className ='pixel';
                    divElemento.style.backgroundColor = 'white';
                    divLinha.appendChild(divElemento);
                }
            }
        } 
    }else{
        alert(" 'Board inválido!'");
    }
}

const btnLinha = document.querySelector("#generate-board"); //Botão Avançar
btnLinha.addEventListener('click', tamanhoTabela);
