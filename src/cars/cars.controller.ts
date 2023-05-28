import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDTO, UpdateCarDto } from './dto'

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe ) id: string) {
    const car = this.carsService.findOneById( id )

    return { car }
  }

  @Post()
  create( @Body() createCarDto: CreateCarDTO ) {
    return this.carsService.create(createCarDto)
  }

  @Patch(':id')
  updateCar(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.carsService.update( id, updateCarDto )
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ) {

    const deleted = this.carsService.delete( id )

    return {
      msg: 'deleted',
      deleted,
    }
  }
}
