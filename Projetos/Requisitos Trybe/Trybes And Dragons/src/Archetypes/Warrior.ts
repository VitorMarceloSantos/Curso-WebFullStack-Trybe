import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private __typeEnergy: EnergyType;
  static countWarrior = 0;

  constructor(name: string) {
    super(name);
    this.__typeEnergy = 'stamina';
    Warrior.countWarrior += 1;
  }

  public get energyType(): EnergyType {
    return this.__typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.countWarrior;
  }
}

export default Warrior;