function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercício 01

function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
 
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const daysElement = document.createElement('li');
    daysElement.textContent = dezDaysList[i];
    daysElement.classList.add('day'); // Todos elementos (li) vão ter esta classe
    if ((dezDaysList[i] === 24) || (dezDaysList[i] === 25) || (dezDaysList[i] === 31)) {
      daysElement.classList.add('day-holiday');
    }
    if ((dezDaysList[i] === 4) || (dezDaysList[i] === 11) || (dezDaysList[i] === 18)|| (dezDaysList[i] === 25)) {
      daysElement.classList.add('day-friday');
    }
    daysList.appendChild(daysElement);
  }
}
createDays();

//Exercício 02

function btnFeriado(){
  const textInput = document.getElementById('task-input').value;
  const btnContainer = document.querySelector('.buttons-container');

    
  if (textInput === 'Feriados') {
    const btnHoliday = document.createElement('button');
    btnHoliday.setAttribute('id','btn-holiday');
    btnHoliday.textContent = 'Feriado';
    btnContainer.appendChild(btnHoliday);
  }
  btnHolidayEvent();
}

//Exercício 03

function btnHolidayEvent(){
  eventBtn = document.getElementById('btn-holiday');
  const daysList = document.querySelector('#days');

  eventBtn.addEventListener('click', function (){
  for (let i = 0; i < daysList.childElementCount; i += 1) {
    if (daysList.children[i].style.backgroundColor === 'green') {
      daysList.children[i].setAttribute("style",'red')
    }else if (daysList.children[i].classList.contains('day-holiday')) {
      daysList.children[i].style.backgroundColor = 'green';
    }
  }
  });
}


//Exercício 04

function sextaFeira(){
  const textInput = document.getElementById('task-input').value;
  const btnContainer = document.querySelector('.buttons-container');

  if (textInput === 'Sexta-feira') {
    const btnFriday = document.createElement('button');
    btnFriday.setAttribute('id','btn-friday');
    btnFriday.textContent = 'Sextouuu!';
    btnContainer.appendChild(btnFriday);
    
  }
  btnSextaFeira();
}

//Exercício 05

function btnSextaFeira(){
  eventBtn = document.getElementById('btn-friday');
  const daysList = document.querySelector('#days');

  eventBtn.addEventListener('click', function (){
  for (let i = 0; i < daysList.childElementCount; i += 1) {
    if (daysList.children[i].textContent === 'Beba com moderação.') {
      daysList.children[i].textContent = 'Ressaca.'
    }
    else if (daysList.children[i].classList.contains('day-friday')) {
      daysList.children[i].textContent = 'Beba com moderação.'
    }
  }
  });
}

const btnAdicionar = document.getElementById('btn-add');

btnAdicionar.addEventListener('click', function(){
  //Executar funções
  btnFeriado();

  sextaFeira();
})