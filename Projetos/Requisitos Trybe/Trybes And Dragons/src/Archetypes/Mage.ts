import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private __typeEnergy: EnergyType;
  static countMage = 0;

  constructor(name: string) {
    super(name);
    this.__typeEnergy = 'mana';
    Mage.countMage += 1;
  }

  public get energyType(): EnergyType {
    return this.__typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.countMage;
  }
}

export default Mage;