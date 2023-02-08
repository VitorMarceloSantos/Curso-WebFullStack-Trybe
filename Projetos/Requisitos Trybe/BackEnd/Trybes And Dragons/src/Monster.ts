import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints = this._lifePoints - attackPoints <= 0 
      ? -1 : this._lifePoints - attackPoints;

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;