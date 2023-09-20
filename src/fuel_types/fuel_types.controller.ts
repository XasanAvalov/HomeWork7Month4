import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelTypes } from './models/fuel-types.model';
import { FuelTypesService } from './fuel_types.service';
import { CreateFuelTypesDto } from './dto/create-fuel-types.dto';
import { UpdateFuelTypesDto } from './dto/update-fuel-types.dto';

@Controller('fuel-types')
export class FuelTypesController {
    constructor(private readonly fuelTypesService: FuelTypesService){}

    @Post('create')
    create(@Body() createFuelTypesDto: CreateFuelTypesDto):Promise<FuelTypes> {
        return this.fuelTypesService.create(createFuelTypesDto)
    }

    @Get('findAll')
    findAll():Promise<FuelTypes[]>{
        return this.fuelTypesService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number):Promise<FuelTypes>{
        return this.fuelTypesService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateFuelTypesDto: UpdateFuelTypesDto){
        return this.fuelTypesService.update(id, updateFuelTypesDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.fuelTypesService.delete(id)
    }   
}
