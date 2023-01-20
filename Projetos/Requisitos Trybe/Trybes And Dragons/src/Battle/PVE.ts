import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player1: Fighter;
  private _player2: SimpleFighter[];

  constructor(player1: Fighter, player2: SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
    super.fight();
  }

  variousBatles(player2: SimpleFighter): void {
    while (this._player1.lifePoints !== -1) {
      this._player1.attack(player2);
      if (player2.lifePoints === -1) break;
      player2.attack(this._player1);
    }
  }

  fight(): number {
    this._player2.forEach((player2) => {
      this.variousBatles(player2);
    });    
    return this._player1.lifePoints !== -1 ? 1 : -1;
  }
}

export default PVE;