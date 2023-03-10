import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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

  findOne(id: number) {
    const existingCoffee = this.coffees.find((coffee) => coffee.id === id);
    if (existingCoffee) {
      return existingCoffee;
    } else {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push(createCoffeeDto.toEntity());
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      existingCoffee.name = updateCoffeeDto.name
        ? updateCoffeeDto.name
        : existingCoffee.name;
      existingCoffee.brand = updateCoffeeDto.brand
        ? updateCoffeeDto.brand
        : existingCoffee.brand;
      existingCoffee.flavors = updateCoffeeDto.flavors
        ? updateCoffeeDto.flavors
        : existingCoffee.flavors;
    } else {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
