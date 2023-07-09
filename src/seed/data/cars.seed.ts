import { Car } from 'src/cars/interfaces/car.interface'
import { randomUUID } from 'crypto'

export const CARS_SEED: Car[] = [
  {
    brand: 'Nissan',
    id: randomUUID(),
    model: 'Jetta'
  },
  {
    brand: 'Honda',
    id: randomUUID(),
    model: 'Civic'
  },
  {
    brand: 'Jeep',
    id: randomUUID(),
    model: 'Cherokee'
  },
]
