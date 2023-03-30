// Funções

import { TItem } from "../types/items";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}` // o mês começa em 0, por isso adiciona +1
}

export const filterListByMonth = (list: TItem[], date: string): TItem[] => {
  let newList: TItem[] = [];
  let [year, month] = date.split('-');
  
  for(let i in list) { // verificando se o item é do ano e do mês em especifico
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth()+1 === parseInt(month)
    ) {
      newList.push(list[i]); // gerando nova lista
    }
  }
  
  return newList;
}

const addZeroDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  return `${months[parseInt(month) - 1]} de ${year}`
}
