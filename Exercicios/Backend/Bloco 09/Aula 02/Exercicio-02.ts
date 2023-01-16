import Person from "./Exercicio-01";

class Student extends Person{
  private _enrollment: number
  private _examsGrades: number[] = [] // pode atribuir um valor default
  private _assignmentsGrades: number[] = [] // pode atribuir um valor default

  constructor(n: string, b: Date){
    super(n, b); // o super irá inicializar o constructor da super classe(Person), deve receber os mesmos parametros que a classe super
    this._enrollment = this.generateEnrollment();
    // this._examsGrades = [];
    // this._assignmentsGrades = [];
  }

  public get enrollment(): number {
    return this._enrollment;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  public set examsGrades(newArray: number[]){
    if (newArray.length <= 4) this._examsGrades = newArray;
  }

  public set assignmentGrades(newArray: number[]){
    if (newArray.length <= 2 ) this._assignmentsGrades = newArray;
  }

  public generateEnrollment(){
    return Number(String(Date.now() * (Math.random() + 1)).replace(/\W/g, ''));
  }

  public sumExamsGrades(){
    const notesArray = [...this._examsGrades, ...this._assignmentsGrades];
    return console.log(`Soma: ${notesArray.reduce((acc, current) => {
      return acc + current}, 0)}`);
  }

  public sumAverageGrade(){
    const notesArray = [...this._examsGrades, ...this._assignmentsGrades];
    return console.log(`Média: ${((notesArray.reduce((acc, current) => {
      return acc + current}, 0))/notesArray.length).toFixed(2)}`);
  }
}

const person1 = new Student('Vitor', new Date("1991-04-16"));
console.log(person1.birthDate);
console.log(person1.name);
person1.examsGrades = [25, 20, 25, 23];
person1.assignmentGrades = [50, 45];
person1.sumExamsGrades();
person1.sumAverageGrade();

