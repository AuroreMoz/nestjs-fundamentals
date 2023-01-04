export class Coffee {
  id: number;
  name: string;
  brand: string;
  flavors: string[];

  constructor(name: string, brand: string, flavors: string[]) {
    this.name = name;
    this.brand = brand;
    this.flavors = flavors;
  }
}
