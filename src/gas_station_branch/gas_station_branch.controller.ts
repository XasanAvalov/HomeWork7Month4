import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { GasStationBranch } from './models/gas-station-branch.model';
import { CreateGasStationBranchDto } from './dto/create-gas-station-branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas-station-branch.dto';

@Controller('gas-station-branch')
export class GasStationBranchController {
    constructor(private readonly gasStationBranchService: GasStationBranchService){}

    @Post('create')
    create(@Body() createGasStationBranchDto: CreateGasStationBranchDto):Promise<GasStationBranch> {
        return this.gasStationBranchService.create(createGasStationBranchDto)
    }

    @Get('findAll')
    findAll():Promise<GasStationBranch[]>{
        return this.gasStationBranchService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number):Promise<GasStationBranch>{
        return this.gasStationBranchService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateGasStationBranchDto: UpdateGasStationBranchDto){
        return this.gasStationBranchService.update(id, updateGasStationBranchDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.gasStationBranchService.delete(id)
    }    
}
