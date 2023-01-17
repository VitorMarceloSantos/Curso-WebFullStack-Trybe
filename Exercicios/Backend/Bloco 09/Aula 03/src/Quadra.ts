import IAgenda from "./interfaces/IAgenda";

abstract class Quadra { 
  protected abstract reservar<T>(horaReservar: Date): IAgenda<T>
}

export default Quadra;