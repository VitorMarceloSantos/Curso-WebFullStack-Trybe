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