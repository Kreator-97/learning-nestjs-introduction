import { Brand } from 'src/brands/entities/brand.entity'
import { randomUUID } from 'crypto'

export const BRANDS_SEED: Brand[] = [
  {
    name: 'Nissan',
    id: randomUUID(),
    createAt: Date.now()
  },
  {
    name: 'Tesla',
    id: randomUUID(),
    createAt: Date.now()
  },
  {
    name: 'Renault',
    id: randomUUID(),
    createAt: Date.now()
  },
]
