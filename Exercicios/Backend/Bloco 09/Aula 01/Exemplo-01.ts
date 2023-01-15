class Tv {
  public brand: string
  public size: number
  public resolution: string
  public connections: string[]
  public connectedTo: string

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b,
    this.size = s,
    this.resolution = r,
    this.connections = c
    this.connectedTo = ''
  }

  public turnOn() {
    return console.log(`Brand: ${this.brand} - Size: ${this.size} - Resolution: ${this.resolution} - Conexões: ${this.connections}`);
  }
}

const samsung = new Tv('Samsung', 50, '4k', ['HDMI', 'USB']);
samsung.turnOn();