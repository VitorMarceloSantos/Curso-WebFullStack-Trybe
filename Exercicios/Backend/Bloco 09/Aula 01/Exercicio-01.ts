class Student {
  private _tests: number[];
  private _works: number[];

  constructor( // quando não utilizar as variaveis acima para alguma verificação, poderá inicia-las no constructor
    public name: string,
    public registration: number,
  ) {
    this.name = name;
    this.registration = registration;
    this._tests = []; // mesmo não recebendo como parâmetro, deve ser inicializada no construtor
    this._works = [];
  }

  public set tests(addValues: number[]){
    this._tests = addValues; // array de numbers
  }

  public set works(addValues: number[]){
    this._works = addValues; // array de numbers
  }

  public get tests(): number[]{
    return this._tests;
  }

  public get works(): number[]{
    return this._works;
  }

  // Retorna todas as informações de Student
  public informationsStudent() {
    return console.log(`Nome: ${this.name} - Matricula: ${this.registration} - Provas: ${this.tests} - Trabalhos: ${this.works}`);
  }

  // Soma das notas
  public sumNotes(){
    const studentArray = [...this._tests, ...this.works]; // realizando o espalhamento dos array
    return console.log(`Soma: ${studentArray.reduce((acc, current) => {
      return acc + current}, 0)}`);
  }

  // Media das notas
  public middleNotes(){
    const studentArray = [...this._tests, ...this.works]; // realizando o espalhamento dos array
    return console.log(`Média: ${((studentArray.reduce((acc, current) => {
      return acc + current}, 0))/studentArray.length).toFixed(2)}`);
  }
}

const student01 =  new Student('Vitor', 123);
student01.tests = [5.5, 6.7, 8, 9.2];
student01.works = [8.9, 10];

// Imprimir
student01.informationsStudent();
console.log('Provas:', student01.tests);
console.log('Trabalhos:', student01.works);
student01.sumNotes();
student01.middleNotes();
