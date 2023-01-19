type EnergyType = 'mana' | 'stamina'; // Pode receber apenas um desses dois valores

interface Energy{
  type_: EnergyType;
  amount: number;
}

export default Energy;
export { EnergyType };