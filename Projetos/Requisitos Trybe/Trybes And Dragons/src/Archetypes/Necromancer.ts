import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private __typeEnergy: EnergyType;
  static countNecromancer = 0;

  constructor(name: string) {
    super(name);
    this.__typeEnergy = 'mana';
    Necromancer.countNecromancer += 1;
  }

  public get energyType(): EnergyType {
    return this.__typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.countNecromancer;
  }
}

export default Necromancer;