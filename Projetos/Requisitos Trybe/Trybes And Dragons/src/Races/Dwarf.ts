import Race from './Race';

class Dwarf extends Race {
  private _pointsLife: number;
  static countDwarf = 0; // Criando uma variável statica, armazena seu valor na memoria

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._pointsLife = 80;
    Dwarf.countDwarf += 1; // A cada repetição do construção(nova isntância) será adicionado +1 
  }

  public get maxLifePoints(): number {
    return this._pointsLife;
  }

  static createdRacesInstances(): number {
    return Dwarf.countDwarf;
  }
}

export default Dwarf;