export default class Person{
  private _name: string
  private _birthDate: Date

  constructor(
    private n: string,
    private b: Date
  ){
    this._name = n;
    this._birthDate = b;
  }

  public get name(){
    return this._name;
  }
  public get birthDate(){
    return this._birthDate;
  }
  public set name(newValue: string){
    if(newValue.length > 3) this._name = newValue;
  }
  public set birthDate(newValue: Date){
    // Artigo: https://www.freecodecamp.org/portuguese/news/date-now-em-javascript-como-obter-a-data-atual-em-javascript/
    // const actualDate = Date.now();
    // const today = new Date(actualDate)
    // console.log(today.toLocaleDateString()) // Mostrar a data atual no formato: dia/mes/ano
  
    const actualDate = new Date();
    if((newValue <= actualDate) && ((2023 - Number(newValue.getFullYear())) < 120)) {
      this._birthDate = newValue;
    }
  }
}

// const person1 = new Person('Vitor', new Date("1991-04-16"));
// console.log(person1.birthDate);
// console.log(person1.name);
// person1.name = 'Rafaela';
// person1.birthDate = new Date('1993-12-14');
// console.log(person1.birthDate);
// console.log(person1.name);