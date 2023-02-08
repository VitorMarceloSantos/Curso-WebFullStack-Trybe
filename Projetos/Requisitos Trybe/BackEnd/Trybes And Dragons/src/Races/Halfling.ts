import Race from './Race';

class Halfling extends Race {
  private _pointsLife: number;
  static countHalfiling = 0; // Criando uma variável statica, armazena seu valor na memoria

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._pointsLife = 60;
    Halfling.countHalfiling += 1; // A cada repetição do construção(nova isntância) será adicionado +1 
  }

  public get maxLifePoints(): number {
    return this._pointsLife;
  }

  static createdRacesInstances(): number {
    return Halfling.countHalfiling;
  }
}

export default Halfling;