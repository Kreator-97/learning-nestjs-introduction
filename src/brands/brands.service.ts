import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBrandDto } from './dto/create-brand.dto'
import { UpdateBrandDto } from './dto/update-brand.dto'
import { Brand } from './entities/brand.entity'

import { v4 as uuid} from 'uuid'

@Injectable()
export class BrandsService {

  private brands: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: Date.now()
    }

    this.brands.push( brand )

    return brand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((brand) => brand.id === id)

    if( !brand ) throw new NotFoundException()

    return brand
  }

  update(id: string, { name }: UpdateBrandDto) {
    const brand = this.findOne(id)

    brand.updatedAt = Date.now()
    brand.name = name

    return { ...brand }
  }

  remove(id: string) {
    const deleted = this.findOne(id)

    this.brands = this.brands.filter( brand => brand.id !== id )
    return deleted
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands
  }
}
