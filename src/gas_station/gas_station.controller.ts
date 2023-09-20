import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { GasStation } from './models/gas-station.model';
import { UpdateGasStationDto } from './dto/update-gas-station.dto';
import { CreateGasStationDto } from './dto/create-gas-station.dto';

@Controller('gas-station')
export class GasStationController {
    constructor(private readonly gasStationService: GasStationService){}

    @Post('create')
    create(@Body() createGasStationDto: CreateGasStationDto):Promise<GasStation> {
        return this.gasStationService.create(createGasStationDto)
    }

    @Get('findAll')
    findAll():Promise<GasStation[]>{
        return this.gasStationService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number):Promise<GasStation>{
        return this.gasStationService.findOne(id)
    }

    @Put('update/:id')
    updateB(@Param('id') id: number, @Body() updateGasStationDto: UpdateGasStationDto){
        return this.gasStationService.update(id, updateGasStationDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.gasStationService.delete(id)
    }
}
