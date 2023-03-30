import { TItem } from '../types/items';

export const items: TItem[] = [ // adicionando o type
  { date: new Date(2023, 2, 15), category: 'food', title: 'McDonalds', value: 32.12},
  { date: new Date(2023, 2, 15), category: 'food', title: 'Burguer King', value: 28},
  { date: new Date(2023, 2, 16), category: 'rent', title: 'Aluguel Apt', value: 2300},
  { date: new Date(2023, 3, 18), category: 'salary', title: 'Salário', value: 4500}
]