import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined; // caso não seja passado o valor como parâmetro
  protected buyValue: number;

  constructor(vehicleParams: IVehicle) {
    const { id, model, year, color, status, buyValue } = vehicleParams;
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  public setId(newId: string) {
    this.id = newId;
  }

  public getId() {
    return this.id;
  }

  public setModel(newModel: string) {
    this.model = newModel;
  }
  
  public getModel() {
    return this.model;
  }

  public setYear(newYear: number) {
    this.year = newYear;
  }
  
  public getYear() {
    return this.year;
  }

  public setColor(newColor: string) {
    this.color = newColor;
  }
  
  public getColor() {
    return this.color;
  }

  public setStatus(newStatus: boolean) {
    this.status = newStatus;
  }
  
  public getStatus() {
    return this.status;
  }

  public setBuyValue(newBuyValue: number) {
    this.buyValue = newBuyValue;
  }
  
  public getBuyValue() {
    return this.buyValue;
  }
}

export default Vehicle;