const btnAplicar = document.querySelector("#btn_aplicar"); //Botão Aplicar
const btnReiniciar = document.querySelector("#btn_reiniciar"); //Botão Reiniciar
const btnApagar = document.querySelector("#btn_apagar"); //Botão Apagar
const btnVoltar = document.querySelector("#btn_voltar"); //Botão voltar
const btnAvancar = document.querySelector("#btn_avancar"); //Botão Avançar

//Armazena as Cores da Paleta 
let arrayPaletaCores = [[[217, 4, 22], [242, 160, 198], [88, 158, 166], [166, 87, 41], [248, 203, 12]], //Cor0
                        [[169, 191, 4],[242, 149, 2],[242, 176, 53],[217, 103, 4],[217, 43, 4]], //Cor1
                        [[0, 3, 5],[7, 157, 217],[65, 189, 217],[140, 39, 39],[109, 191, 27]], //Cor2
                        [[242, 136, 185],[140, 121, 114],[89, 38, 27],[242, 183, 5],[166, 90, 83]], //Cor3
                        [[12, 135, 242],[8, 140, 79],[242, 56, 90],[242, 231, 80], [252, 76, 170]]];//Cor4

var contPaleta = 0; //Inicializando a variável //Criando as variáveis globais, pois podem ser acessadas de qualquer função no programa.
var linTabela = 0; //Variável global, armazena a quantidde de linhas da ultima tabela criada com sucesso.

//Inicialização Padrão das Cores - Cor0
function corPadrao(){
    for(let i = 0; i < 5; i++){
        const paletaCores = document.querySelectorAll(".cores_paleta");
    
        let temp = "rgb("+arrayPaletaCores[0][i][0]+", "+arrayPaletaCores[0][i][1]+", "+arrayPaletaCores[0][i][2]+")"; // Red , Green , Blue
        paletaCores[i].style.backgroundColor = temp;
    }
}
corPadrao(); //Chamando a Função para inicializar a Paleta de Cores - Cor0

//Função Avançar Paleta de Cores
btnAvancar.addEventListener("click", function(){
    if(contPaleta < 4){
        contPaleta += 1; //Avança a div paleta de cor.
        for(let i = 0; i < 5; i++){
            const paletaCores = document.querySelectorAll(".cores_paleta");
            let temp = "rgb("+arrayPaletaCores[contPaleta][i][0]+", "+arrayPaletaCores[contPaleta][i][1]+", "+arrayPaletaCores[contPaleta][i][2]+")";
            paletaCores[i].style.backgroundColor = temp;
        }
    }else{
        contPaleta = 0; //O contadorPaleta é zerado, para iniciar novamente na Cor0;
        corPadrao(); //Chama a função das Cores Iniciais - Cor0
    }
}, false);

//Função Voltar Paleta de Cores
btnVoltar.addEventListener("click", function(){
    if(contPaleta == 0){
        contPaleta = 4; //Avança a div paleta de cor.
        for(let i = 0; i < 5; i++){
            const paletaCores = document.querySelectorAll(".cores_paleta");
            let temp = "rgb("+arrayPaletaCores[contPaleta][i][0]+", "+arrayPaletaCores[contPaleta][i][1]+", "+arrayPaletaCores[contPaleta][i][2]+")";
            paletaCores[i].style.backgroundColor = temp;
        }
    }else{
        contPaleta -= 1; //Avança a div paleta de cor.
        for(let i = 0; i < 5; i++){
            const paletaCores = document.querySelectorAll(".cores_paleta");
            let temp = "rgb("+arrayPaletaCores[contPaleta][i][0]+", "+arrayPaletaCores[contPaleta][i][1]+", "+arrayPaletaCores[contPaleta][i][2]+")";
            paletaCores[i].style.backgroundColor = temp;
        }
    }
}, false);

var corSelecionada; //Cor selecionada é uma variável global

function corUsuario(){ //Função criada para adicionar o background-color na div paleta_criar_cor
    let numRed = Number(document.querySelector("#range_red").value); //converte os valores do input range para number
    let numGreen = Number(document.querySelector("#range_green").value); //converte os valores do input range para number
    let numBlue = Number(document.querySelector("#range_blue").value); //converte os valores do input range para number

    let paletaUsuario = document.getElementById("paleta_criar_cor4");
    
    paletaUsuario.style.backgroundColor = "rgb("+numRed+" ,"+numGreen+" ,"+numBlue+")"; // a div vai ter o background com a cor criada pelo usuario

    const textRed = document.querySelector('#txt_red');
    textRed.textContent = `R: ${numRed}`;
    const textGreen = document.querySelector('#txt_green');
    textGreen.textContent = `G: ${numGreen}`;
    const textBlue = document.querySelector('#txt_blue');
    textBlue.textContent = `B: ${numBlue}`;
}

let valorRed = document.querySelector("#range_red"); //aponta para o input range red
let valorGreen = document.querySelector("#range_green"); //aponta para o input range green
let valorBlue = document.querySelector("#range_blue"); //aponta para o input range blue

       
//Cada um dos input range tera seu proprio addEventList
valorRed.addEventListener("click",function(){ 
    
    corUsuario(); //Chama a função corUsuário

}, false); 

valorGreen.addEventListener("click",function(){ 
    
    corUsuario(); //Chama a função corUsuário

}, false); 

valorBlue.addEventListener("click",function(){ 
    
    corUsuario(); //Chama a função corUsuário

}, false); 

//Capturar a Cor Selecionada pelo Usuário

function corAleatorio(){
    
    for(let i = 0; i < 3; i += 1) {
        let numRed = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255
        let numGreen = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255
        let numBlue = Math.floor(Math.random() * 256); //Vai gerar um número aleatorio de 0 a 255

        let paletaUsuario = document.querySelectorAll(".paleta_usuario");

        paletaUsuario[i].style.backgroundColor = "rgb("+numRed+" ,"+numGreen+" ,"+numBlue+")"; // a div vai ter o background com a cor criada pelo usuario
    }
}

const btnConfirma = document.querySelector("#btn_confirma"); //Aciona o botão confirma
btnConfirma.addEventListener("click", function(){

    const opcoesPaleta = document.getElementsByName("radio_paleta"); //Seleciona todos os inputs[0,1,2]

    function eventoPaletaUsuario(){
        let paletaUsuario = document.getElementById("paleta_criar_cor4");
        corSelecionada = paletaUsuario.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada. //A variavel global corSelecionada vai armazendar a cor criada pelo usuario
    }

    function eventoPaletaAleatorio(e){
        corSelecionada = e.target.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada. //A variavel global corSelecionada vai armazendar a cor criada pelo usuario 
    }
    
    function eventoPadrao(e){ //Função criada exclusivamente para remover os eventos da paletas de cores padrão
        corSelecionada = e.target.getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada.
        // paletaCores[i].addEventListener("click", function(){
        //     corSelecionada = paletaCores[i].getAttribute("style"); //O getAttribute armazena o valor do background-color: rgb() da div selecionada.
        // }, false); 
    }

    function removerEventoPaleta(){
        const paletaCores = document.querySelectorAll(".cores_paleta");
        for(let i = 0; i < 5; i++){
            paletaCores[i].removeEventListener("click", eventoPadrao); 
        }
    }

    function removerEventoUsuario(){
        let paletaUsuario = document.getElementById("paleta_criar_cor4");
       
        paletaUsuario.removeEventListener("click", eventoPaletaUsuario); 
    } 

    function removerEventoAleatorio(){
        const paletaUsuario = document.querySelectorAll(".paleta_usuario");
        for(let i = 0; i < 3; i++){
            paletaUsuario[i].removeEventListener("click", eventoPaletaAleatorio); 
        }
    } 
    
    if(opcoesPaleta[0].checked){
        //Remover eventos
        removerEventoPaleta(); //remover evento PaletaPadrão
        removerEventoAleatorio(); // remove evento Aleatorio

        //Adicionar Evento
        let paletaUsuario = document.getElementById("paleta_criar_cor4");
        paletaUsuario.addEventListener("click", eventoPaletaUsuario());

    }else if(opcoesPaleta[1].checked){
            //Remover eventos
            removerEventoPaleta(); //remvover evento PaletaPadrão
            removerEventoUsuario(); //remover evento PaletaUsuario

            //Adicionar Evento
            corAleatorio(); //chama a função cor aleatório

            const paletaUsuario = document.querySelectorAll(".paleta_usuario");
            for(let i = 0; i < 3; i++){
                paletaUsuario[i].addEventListener("click", eventoPaletaAleatorio); 
            } 

    }else if(opcoesPaleta[2].checked){ //Seleciona a Paleta Padrão
            //Remover Eventos
            removerEventoUsuario(); //remover evento PaletaUsuario
            removerEventoAleatorio(); // remove evento Aleatorio

            //Adicionar Evento
            const paletaCores = document.querySelectorAll(".cores_paleta");
            for(let i = 0; i < 5; i++){
                paletaCores[i].addEventListener("click", eventoPadrao); 
            } 
    } 
}, false);

//Apagando a Tabela
function apagarTabela(){
    const tabela = document.getElementById("tabela");
    const numLinha = Number(document.getElementById("linhaTxt").value);
   
    if(((numLinha >= 1) && (numLinha <= 10))){
        for(let i = 0; i < numLinha; i += 1){
            let temp = document.getElementById("lin_"+i);
            tabela.removeChild(temp); // o metodo remove(), irá remover o elemento que é o seu invocador 
        }
    }else{
        for(let i = 0; i < linTabela; i += 1){ //Utiliza a variavel linTabela que armazena a quantidade de linhas da ultima tabela criada com sucesso.
            let temp = document.getElementById("lin_"+i);
            tabela.removeChild(temp); // o metodo remove(), irá remover o elemento que é o seu invocador 
        }
    }
}

//Reiniciando as cores da Tabela
function reiniciarTabela(){
    const divTabela = document.querySelectorAll(".box_div"); //Vai selecionar todos as div's que possuem a classe .box_div
    for(let i = 0; i < divTabela.length; i++){//A repetição vai ocorrer na quantidade de div's
        divTabela[i].setAttribute("style","rgb(255, 255, 255)"); //o this se refere ao elemento que está sendo clicado //Foi utilizada a variavel corSelecionada com o valor armazendo do style.   
    }  
}

//Gerando a Tabela
function criarTabela(){
    const numLinha = Number(document.getElementById("linhaTxt").value);
    const numColuna = Number(document.getElementById("colunaTxt").value);
    const tabela = document.getElementById("tabela");

    if(((numLinha >= 1) && (numLinha <= 10)) && ((numColuna >= 1) && (numColuna <= 10))){ /* Caso seja verdadeiro irá criar a tabela, caso contrario irá apresentar mensagem de erro */
    for (let i = 0; i < numLinha; i += 1) {
        // cria a div container de cada linha
        let divLinha = document.createElement('div');
        divLinha.className ='divLinha';
        // seta o id no lugar certo
        divLinha.setAttribute("id","lin_"+i); //Cada uma das Linhas vai receber um id
        tabela.appendChild(divLinha);
        for (let j = 0; j < numColuna ; j += 1) {
            // cria cada elemento (div) no segundo loop
            let divElemento = document.createElement("div");    
            divElemento.setAttribute("id","lin_"+i+"_"+j); //Cada uma das elemmento vai receber um id
            divElemento.className ='box_div';
            divLinha.appendChild(divElemento);
        }
    }
        linTabela = numLinha; //linTabela(Variavel global) vai armazenar o numero de linhas da ultima tabela criada com sucesso.
    }else{
        alert("[ERRO] - Número de Linhas/Colunas não respeita o limite mínimo de 1 e máximo de 10.");
        apagarTabela(); //Apaga a tabela que está em tela
    } 
}
  
//Gerar Tabela
btnAplicar.addEventListener("click", function(){
    const tabela = document.getElementById("tabela");
    const estilo = document.querySelector("#link_css"); //Vai alterar as folhas de estilo CSS
    estilo.setAttribute("href","css/style.css"); //Alterando as folhas de Estilo CSS
   
    if(tabela.childElementCount != 0){ //Faz a contagem de quandos elementos filhos o elemento Tabela possui, caso seja zero é pq não possui nenhuma linha. //Utiliza a função apagaTabela para apagar todos os elementos da tabela
        apagarTabela(); 
    }

    criarTabela();//Chama a função para criar uma nova tabela
    
    //Colorindo a tabela
    const divTabela = document.querySelectorAll(".box_div"); //Vai selecionar todos as div's que possuem a classe .box_div
    for(let i = 0; i < divTabela.length; i++){//A repetição vai ocorrer na quantidade de div's
        divTabela[i].addEventListener("click", function(){
            this.setAttribute("style",corSelecionada); //o this se refere ao elemento que está sendo clicado //Foi utilizada a variavel corSelecionada com o valor armazendo do style. 
        }, false);
    }     
},false);

//Apagar Tabela
btnApagar.addEventListener("click", apagarTabela);

//Reiniciar Tabela
btnReiniciar.addEventListener("click", reiniciarTabela);

//#VQV
const btn_trybe = document.querySelector("#btn_trybe");

btn_trybe.addEventListener("click", function(){
    //Antes de começar a rodar, apaga todos os elementos(divs) que já foram criados.
    const tabela = document.getElementById("tabela");

    if(tabela.childElementCount != 0){
        apagarTabela(); //Função apagar Tabela
    }
    const estilo = document.querySelector("#link_css"); //Vai alterar as folhas de estilo CSS
    estilo.setAttribute("href","css/style2.css"); //Alterando as folhas de Estilo CSS
    const numLinha = 51;
    const numColuna = 98;
    
    
    if(tabela.childElementCount === 0){
        setTimeout(function(){ //Ulilizei esse setTimeout para dá um intervalo para a folha de stylo(style2.css) carregar adquequadamente.
            for (let i = 0; i < numLinha; i += 1) {
                // cria a div container de cada linha
                    let divLinha = document.createElement('div');
                    divLinha.className ='divLinha';
                // seta o id no lugar certo
                divLinha.setAttribute("id","lin_"+i); //Cada uma das Linhas vai receber um id
                tabela.appendChild(divLinha);
                for (let j = 0; j < numColuna ; j += 1) {
                    // cria cada elemento (div) no segundo loop
                    let divElemento = document.createElement("div");    
                    divElemento.setAttribute("id","lin_"+i+"_"+j); //Cada uma das elemmento vai receber um id
                    divElemento.className ='box_div';
                    divLinha.appendChild(divElemento);
                }
            }
           
            const divTabela = document.querySelectorAll(".box_div"); //Vai selecionar todos as div's que possuem a classe .box_div //Cada div vai receber um número(0 - 4997, total de 51 linhas x 98 colunas)
    
            //Início Função cor Verde
            function corVerde(){
                for(let i = 0; i <= 50; i++){ 
                    for(let j = 0; j <= 39; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 0; i <= 50; i++){ 
                    for(let j = 63; j <= 97; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
            }
            //Fim da Função Cor Verde
    
            //Inicio da Função Letra Y
            function letraY(){
                for(let i = 0; i <= 4; i++){
                    for(let j = 40; j <= 62; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 5; i <= 50; i++){
                    for(let j = 40; j <= 42; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 45; i <= 50; i++){
                    for(let j = 43; j <= 62; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)";
                    }
                }
                for(let i = 5; i <= 50; i++){
                    for(let j = 60; j <= 62; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 941; i <= 4371; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1234; i <= 4370; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1723; i <= 4369; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2212; i <= 4368; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2407; i <= 4367; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2798; i <= 4366; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2792; i <= 4360; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2399; i <= 4359; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 2202; i <= 4358; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1711; i <= 4357; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1220; i <= 4356; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 925; i <= 4355; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 538; i <= 930; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1029; i <= 1225; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1324; i <= 1618; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1717; i <= 1913; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1326; i <= 1620; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 1033; i <= 1229; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
                for(let i = 544; i <= 936; i+=98){ 
                    divTabela[i].style.backgroundColor = "rgb(15, 163, 107)"; 
                }
            } 
            //Fim da Função Letra Y
            corVerde();//Chamando a funçao
            letraY();//Chamando a função
            //Fim da Tela Verde Trybe
    
            //Apagar Trybe
            //Direita para a Esquerda
            let temp = 3000;
            for(let j = 49; j >= 0; j--){
                temp += 60; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let i = 0; i <= 50; i++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp); //tempo em milisegundos 
            }
            //Esquerda para Direita
            let temp2 = 3000; 
            for(let j = 50; j <= 97; j++){
                temp2 += 60; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let i = 0; i <= 50; i++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp2); //tempo em milisegundos 
            }
    
            //Criando Tabela Trybe
            setTimeout(function(){
            //Início Letra T
                for(let i = 2; i <= 9; i++){
                    for(let j = 2; j <= 19; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); //Cada elemento TD da tabela possou um ID
                        temp.style.backgroundColor = "black"; // Seleciona o elemento filho na posição[0] do elemento TD  //O metodo children retorna uma cadeia(array) de elementos filhos, mas como só tem um elemento filho em cada TD, ele terá a posição [0]. 
                    }
                }
                for(let i = 10; i <= 48; i++){
                    for(let j = 9; j <= 12; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }//Fim Letra T
    
                //Início Letra R
                for(let i = 2; i <= 48; i++){
                    for(let j = 22; j < 26; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 2; i <= 9; i++){
                    for(let j = 26; j <= 32; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 23; i <= 29; i++){
                    for(let j = 26; j <= 33; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
    
                let divTabela = document.querySelectorAll(".box_div"); //Vai selecionar todos as div's que possuem a classe .box_div //Cada div vai receber um número(0 - 4997, total de 51 linhas x 98 colunas)
    
                for(let i = 327; i <= 4737; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 426; i <=2386; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 623; i <= 2191; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 820; i <= 1996; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1017; i <= 1703; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                divTabela[1012].style.backgroundColor = "black";
                divTabela[1110].style.backgroundColor = "black";
                divTabela[2090].style.backgroundColor = "black";
                divTabela[2188].style.backgroundColor = "black";
                for(let i = 2778; i <= 4738; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2975; i <= 4739; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3172; i <= 4740; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                divTabela[2971].style.backgroundColor = "black";
                divTabela[3069].style.backgroundColor = "black";
                divTabela[2972].style.backgroundColor = "black";
                divTabela[3070].style.backgroundColor = "black";
                divTabela[3168].style.backgroundColor = "black";
                divTabela[3266].style.backgroundColor = "black";
                divTabela[3364].style.backgroundColor = "black";
                //Fim Letra R
    
                //Início Letra Y
                
                letraY(); //Chamando a funcão 
    
                //Fim Letra Y
    
                //Início Letra B
                for(let i = 2; i <= 48; i++){ 
                    for(let j = 65; j <= 68; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 2; i <= 9; i++){ 
                    for(let j = 69; j <= 73; j++){ 
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 21; i <= 28; i++){
                    for(let j = 69; j <= 74; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 41; i <= 48; i++){
                    for(let j = 69; j <= 74; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 368; i <= 956; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 467; i <= 4681; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 566; i <= 2134; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 665; i <= 1939; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 862; i <= 1744; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2428; i <= 4584; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2625; i <= 4389; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2822; i <= 4194; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3117; i <= 3901; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                //Fim Letra B
    
                //Início Letra E
                for(let i = 2; i <= 48; i++){ 
                    for(let j = 82; j <= 85; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 2; i <= 8; i++){ 
                    for(let j = 86; j <= 95; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 22; i <= 28; i++){ 
                    for(let j = 86; j <= 95; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 42; i <= 48; i++){ 
                    for(let j = 86; j <= 95; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
            },6000) //setTimeout - Tabela Trybe
    
            //Apagar Trybe
            temp = 10000;
            for(let j = 0; j <= 97; j++){
                temp += 70; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let i = 0; i <= 50; i++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp); //tempo em milisegundos 
            }
    
            //#VQM
            //Início da #
            setTimeout(function(){
                for(let i = 14; i <= 17; i++){
                    for(let j = 11; j <= 27; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 26; i <= 29; i++){
                    for(let j = 10; j <= 26; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 2; i <= 7; i++){
                    for(let j = 18; j <= 19; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 8; i <= 10; i++){
                    for(let j = 17; j <= 18; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 11; i <= 13; i++){
                    for(let j = 16; j <= 17; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 18; i <= 20; i++){
                    for(let j = 16; j <= 17; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 21; i <= 25; i++){
                    for(let j = 15; j <= 16; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 30; i <= 32; i++){
                    for(let j = 14; j <= 15; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 33; i <= 36; i++){
                    for(let j = 13; j <= 14; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 37; i <= 40; i++){
                    for(let j = 12; j <= 13; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 37; i <= 40; i++){
                    for(let j = 18; j <= 19; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 33; i <= 36; i++){
                    for(let j = 19; j <= 20; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 30; i <= 32; i++){
                    for(let j = 20; j <= 21; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 21; i <= 25; i++){
                    for(let j = 21; j <= 22; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 18; i <= 20; i++){
                    for(let j = 22; j <= 23; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 11; i <= 13; i++){
                    for(let j = 22; j <= 23; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 8; i <= 10; i++){
                    for(let j = 23; j <= 24; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                for(let i = 2; i <= 7; i++){
                    for(let j = 24; j <= 25; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "rgb(15, 163, 107)"; 
                    }
                }
                //Fim da #
    
                //Início Letra V
                for(let i = 227; i <= 423; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 228; i <= 914; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 425; i <= 1503; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 916; i <= 1994; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1505; i <= 2485; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1996; i <= 2976; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2487; i <= 3467; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2978; i <= 3958; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3469; i <= 3959; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2980; i <= 3960; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2491; i <= 3471; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2002; i <= 2982; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1513; i <= 2493; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 926; i <= 2004; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 437; i <= 1515; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 242; i <= 928; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 243; i <= 439; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                //Fim Letra V
                
                //Início Letra Q
                for(let i = 2; i <= 4; i++){
                    for(let j = 56; j <= 62; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 552; i <= 552; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 546; i <= 552; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 349; i <= 741; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 446; i <= 936; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 641; i <= 1229; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 934; i <= 3188; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1227; i <= 2893; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2993; i <= 3483; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3288; i <= 3680; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3583; i <= 3779; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3682; i <= 3976; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 39; i <= 41; i++){
                    for(let j = 57; j <= 62; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "black"; 
                    }
                }
                for(let i = 4178; i <= 4374; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 4177; i <= 4177; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 4081; i <= 4669; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 4376; i <= 4670; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 4573; i <= 4671; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3688; i <= 3786; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3591; i <= 3787; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3298; i <= 3690; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3005; i <= 3495; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 948; i <= 3202; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1243; i <= 2909; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 653; i <= 1241; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 456; i <= 946; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 357; i <= 749; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                //Fim Letra Q
    
                //Início Letra V
                for(let i = 267; i <= 463; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 268; i <= 954; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 465; i <= 1543; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 956; i <= 2034; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1545; i <= 2525; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2036; i <= 3016; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2527; i <= 3507; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3018; i <= 3998; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3509; i <= 3999; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 3020; i <= 4000; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2531; i <= 3511; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 2042; i <= 3022; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 1553; i <= 2533; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 966; i <= 2044; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 477; i <= 1555; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 282; i <= 968; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
                for(let i = 283; i <= 479; i+=98){ 
                    divTabela[i].style.backgroundColor = "black"; 
                }
            }, 17000);
    
            //Apagar Trybe
            temp = 19000;
            for(let j = 97; j >= 0; j--){
                temp += 70; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let i = 0; i <= 50; i++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp); //tempo em milisegundos 
            }
    
            //Logo CorVerde
            setTimeout(function(){
                corVerde(); //Chama a função corVerde
                letraY(); //Chama a função Letra Y
            },26200);
    
            //Apagar Trybe
            //Esquerda para Direita
            temp = 29000;
            for(let i = 0; i <= 50; i++){
                temp += 60; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let j = 0; j <= 97; j++){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp); //tempo em milisegundos 
            }
    
            //Esquerda para Direita
            temp2 = 29000; 
            for(let i = 50; i >= 0; i--){
                temp2 += 60; /*A cada laço de repetição deverá adicionar um novo vlaor ao setTimeout para que ele funcione corretamente, caso não seja adicionando um novo valor ele executaŕa apenas uma vez, pois todas as execuções apontam para o mesmo temporizador.*/ 
                setTimeout(function(){
                    for(let j = 97; j >= 0; j--){
                        const temp = document.querySelector("#lin_"+i+"_"+j); 
                        temp.style.backgroundColor = "white";
                    }
                },temp2); //tempo em milisegundos 
            }
    
            //Apagar linhas Tabela
            setTimeout(function(){
                const tabela = document.getElementById("tabela");
                //numLinha = 51; //Declarado no inicio do btn_vqv
                for(let i = 0; i < numLinha; i++){
                    let temp = document.getElementById("lin_"+i); //Vai apontar para todos os elemetnos TR da tabela
                    tabela.removeChild(temp); //Apaga os elementos TR da tabela
                }
            },32200);
        },500); //setTimeout - GERAL
    }// IF
    else{
        if(confirm('#VQV está em execução. Deseja Cancelar?')){ //Caso se true(Confirmar) o if será executado
            location.reload();  // Realiza o recarregamento da página
        }
    }
}, false);

