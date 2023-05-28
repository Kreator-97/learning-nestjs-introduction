import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'

import { Car } from './interfaces/car.interface'
import { CreateCarDTO, UpdateCarDto } from './dto'

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee'
    }
  ]

  findAll() {
    return this.cars
  }

  findOneById( id: string ) {
    const car = this.cars.find( ( car ) => car.id === id )

    if( !car )
      throw new NotFoundException(`Car with id "${ id }" not found`)

    return car
  }

  create( { brand, model }: CreateCarDTO ): Car {
    const car: Car = {
      id: uuid(),
      brand,
      model,
    }

    this.cars.push( car )

    return car
  }

  update( id: string, { brand, model }: UpdateCarDto ): Car {
    const car = this.findOneById(id)

    if( brand ) {
      car.brand = brand
    }

    if( model ) {
      car.model = model
    }

    return car
  }

  delete( id: string ): Car {
    const car = this.findOneById( id )

    this.cars = this.cars.filter( car => car.id !== id )

    return car
  }
}
