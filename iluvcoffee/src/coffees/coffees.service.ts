import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const findedCoffee = this.coffees.find(
      (coffee) => coffee.id.toString() == id,
    );
    if (findedCoffee) {
      return findedCoffee;
    } else {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
  }

  create(coffee: Coffee) {
    this.coffees.push(coffee);
  }

  update(id: string, coffee: Coffee) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
