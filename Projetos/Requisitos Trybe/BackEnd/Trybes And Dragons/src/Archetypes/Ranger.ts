import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private __typeEnergy: EnergyType;
  static countRanger = 0;

  constructor(name: string) {
    super(name);
    this.__typeEnergy = 'stamina';
    Ranger.countRanger += 1;
  }

  public get energyType(): EnergyType {
    return this.__typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.countRanger;
  }
}

export default Ranger;