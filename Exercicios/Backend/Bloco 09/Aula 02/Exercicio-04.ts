export default class Subject{
  private _name: string

  constructor(name: string){
    this._name = name;
  }

  public get name(){
    return this._name;
  }
  
  public set name(newValue: string){
    if (newValue.length >= 3) this._name = newValue;
  }
}