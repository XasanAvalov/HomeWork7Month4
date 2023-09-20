import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateGasSationFuelTypesDto } from './dto/create-gas-station-fuel-type.dto';
import { GasStationFuelType } from './models/gas-station-fuel-type.model';
import { UpdateGasSationFuelTypesDto } from './dto/update-gas-station-fuel-type.dto';

@Controller('gas-station-fuel-type')
export class GasStationFuelTypeController {
    constructor(private readonly gasStationFuelTypeService: GasStationFuelTypeService){}

    @Post('create')
    create(@Body() createGasSationFuelTypes: CreateGasSationFuelTypesDto):Promise<GasStationFuelType> {
        return this.gasStationFuelTypeService.create(createGasSationFuelTypes)
    }

    @Get('findAll')
    findAll():Promise<GasStationFuelType[]>{
        return this.gasStationFuelTypeService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number):Promise<GasStationFuelType>{
        return this.gasStationFuelTypeService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateGasSationFuelTypesDto: UpdateGasSationFuelTypesDto){
        return this.gasStationFuelTypeService.update(id, updateGasSationFuelTypesDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.gasStationFuelTypeService.delete(id)
    }    
}
