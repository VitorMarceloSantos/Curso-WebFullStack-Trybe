window.onload = function (){ //Sempre que a pagina é carregada
  recuperarInformacoes(); // Recupera as tarefas
}

//Botões

let btnCriarTarefa = document.getElementById('criar-tarefa'); // btn adicionar
let btnLimpar = document.getElementById('apaga-tudo'); // bnt limpar(apenas elementos selecionados)
let btnUp = document.getElementById('mover-cima'); // btn up(avança para cima)
let btnDown = document.getElementById('mover-baixo'); // btn down(avança para baixo)
let btnLimparFinalizado = document.getElementById('remover-finalizados'); // btn finalizada (marca como finalizada a tarefa)
let btnLimparSelecionado = document.getElementById('remover-selecionado'); // btn apagar (toda a lista)
let btnSalvaLista = document.getElementById('salvar-tarefas'); // btn apagar (toda a lista)

//Funções

function riscarLinha(e){ // ao dar o duplo clique a linha será riscada
  if(e.target.classList.contains('completed')){
    e.target.classList.remove('elemento-selecionado'); // remove uma classe a lista do elemento
    e.target.classList.remove('completed'); // caso não exista essa classe no elemento, nada acontece
  }else{
    e.target.classList.add('completed'); // adiciona uma classe a lista do elemento
    e.target.classList.remove('elemento-selecionado'); // caso não exista essa classe no elemento, nada acontece
  }
}

function selecionarLinha(e){ // ao dar um clique a linha é selecionada (o parâmetro 'e' se refere a origem, ao utilizar target se refere ao elemento(li) de origem(endereço))
  let lista = document.querySelector('#lista-tarefas');
  for(let i = 0; i <= lista.childElementCount - 1; i += 1){ // remove a class elemento selecionado de todos os elementos(li)
    lista.children[i].classList.remove('elemento-selecionado'); // remove uma classe a lista do elemento
  }
  e.target.classList.add('elemento-selecionado'); // adiciona uma classe a lista do elemento
}

function btnAdicionarTarefa(){ //chamada pelo botão Criar Tarefa
  tarefaAdicionada(); // caso os parâmetros nao sejam passados os mesmos são considerados undefined
}

function tarefaAdicionada(tarefaSalva, classeSalva){ // caso os parâmetros nao sejam passados os mesmos são considerados undefined
  
  function conferirTarefa(){
    if(typeof tarefaSalva === 'undefined'){ // não recebeu parâmetro (Informações salvas)
      return document.querySelector('#texto-tarefa').value;
    }else{
      return tarefaSalva;
    }
  }

    let conteudo = conferirTarefa();
    let lista = document.querySelector('#lista-tarefas');
    let tarefa = document.createElement('li');

    tarefa.addEventListener('dblclick', riscarLinha);  //li recebendo o evento
    tarefa.addEventListener('click', selecionarLinha); //li recebendo o evento
    tarefa.textContent = conteudo; // passando o conteudo do input[text]
    
  if(typeof classeSalva !== 'undefined'){ // recebeu parâmetro (Informações salvas)
    tarefa.classList.add('completed');
  }

  lista.appendChild(tarefa);
    
  conteudo = document.querySelector('#texto-tarefa').value = ''; // passa uma string vazia para o input text, para que o usuário possa entrar com um novo valor
  //conteudo = document.querySelector('#texto-tarefa').focus(); // metodos focus, faz com que o curso do mouse já fique dentro do input
}

function limparElemento(){ // apaga da lista todos os elementos selecionados
  const lista = document.querySelector('#lista-tarefas');
    for (let i = lista.childElementCount - 1; i >= 0; i -= 1){ // apaga todos os elemento da lista, childElementCount: vai contar vai retornar um HTML collection(quantidade de elementos HTML - li);
    lista.children[i].remove();
  }
}

function limparFinalizado(){ // apaga da lista todos os elementos finalizados
  const lista = document.querySelector('#lista-tarefas');
  for (let i = lista.childElementCount - 1; i >= 0; i -= 1){
    if (lista.children[i].classList.contains('completed')) { // caso seja true
        lista.children[i].remove();
    }
  }
}

function limparSelecionado(){ // apaga da lista todos os elementos selecionados
  const lista = document.querySelector('#lista-tarefas');

  for (let i = 0; i < lista.childElementCount; i += 1){
    if (lista.children[i].classList.contains('elemento-selecionado')) { // caso seja true
      lista.children[i].remove();
    }
  }
}

function avancarUp(){
  const lista =  document.querySelector('#lista-tarefas');
  for (let i = 0; i < lista.childElementCount; i += 1){
    if (lista.children[i].classList.contains('elemento-selecionado')) {
      let tempValor = lista.children[i].previousElementSibling; // vai receber o elemento(HTML Collection) irmão anterior
      if (tempValor !== null) { // caso nao haja um elemento irmão anterior, vai receber nulo
        lista.insertBefore(tempValor, lista.children[i].nextElementSibling); //isertBefore - o nó tempValor será removido para a posição ANTES do nó de referência(lista.children[i].nextElementsibling)  --> O procedimento executado é o seguinte: o elemento tempValor que é uma li acima do elemento class (elemento-selecionado), será movido para o posição que antecede o elemento class (elemento-selecionado), ou seja, o elemento tempValor será movido para a posição posterio ao elemento class(elemento-selecionado)
      }
    }
  }
}

function avancarDown(){
  const lista =  document.querySelector('#lista-tarefas');
  for (let i = 0; i <= lista.childElementCount - 1; i += 1){
    if (lista.children[i].classList.contains('elemento-selecionado')) {
      let tempValor = lista.children[i].nextElementSibling; // vai receber o elemento(HTML Collection) irmão posterior
      if (tempValor !== null) { // caso nao haja um elemento irmão anterior, vai receber nulo
        lista.insertBefore(tempValor, lista.children[i]); //isertBefore - o nó tempValor será removido para a posição ANTES do nó de referência(lista.children[i])  --> O procedimento executado é o seguinte: o elemento tempValor que é uma li abaixo do elemento class (elemento-selecionado), será movido para o posição que antecede o elemento class (elemento-selecionado), ou seja, o elemento tempValor será movido para a posição anterior ao elemento class(elemento-selecionado)
        break; // usado para que o evento execute apenas uma vez(caso o elemento estivesse na primeira posição ele iria para a ultima posição)
      }
    }
  }
}

function objetoTarefa(tarefaUsuario, classeUsuario){
  let obj = {
    tarefa: tarefaUsuario,
    classe: classeUsuario,
  }
  return obj;
}

function armazenarInformacoes(){
 
  const lista = document.querySelector('#lista-tarefas');
  let arrayInformacoes = []; // em casa posição vai ser armazenado um objeto(Tarefa / classe )
  for(let i = 0; i < lista.childElementCount; i += 1) {
    let tarefa = lista.children[i].textContent;
    let classe = lista.children[i].classList.value; // vair armazenar a classe
    
    arrayInformacoes.push(objetoTarefa(tarefa, classe)); // cada posição do array vai armazenar uma tarefa e sua classe
  }
  localStorage.setItem('informacoes', JSON.stringify(arrayInformacoes)); // armazenando as informações
 
}

function recuperarInformacoes(){
  const arquivoArmazenados = JSON.parse(localStorage.getItem('informacoes')); // recuperando as informações armazenada 
 
  if(arquivoArmazenados !== null){
    for(let i = 0; i < arquivoArmazenados.length; i += 1){
      let tarefa = arquivoArmazenados[i]['tarefa']; // tarefa
      let classe = arquivoArmazenados[i]['classe']; // classe
     
      if(classe === 'completed'){
        tarefaAdicionada(tarefa,classe); // vai enviar a tarefa e class completed
      }else{
        tarefaAdicionada(tarefa); // vai enviar somente a tarefa, pois a class não é completed
      }
    }
  }
  
}

// // Execução

btnCriarTarefa.addEventListener('click',btnAdicionarTarefa); // não utiliza parenteses na função sendo chamada

btnLimpar.addEventListener('click', limparElemento); // apaga apenas os elemento selecionados

btnUp.addEventListener('click', avancarUp); // avança para cima

btnDown.addEventListener('click', avancarDown); // avança para baixo

btnLimparSelecionado.addEventListener('click', limparSelecionado); // apaga os elemento selecionados

btnLimparFinalizado.addEventListener('click', limparFinalizado) // apagos todas as tarefas finalizadas

btnSalvaLista.addEventListener('click', armazenarInformacoes) // armazena todas as tarefas 


