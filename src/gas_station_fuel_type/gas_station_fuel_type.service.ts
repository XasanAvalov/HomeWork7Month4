import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/gas-station-fuel-type.model';
import { UpdateGasSationFuelTypesDto } from './dto/update-gas-station-fuel-type.dto';
import { CreateGasSationFuelTypesDto } from './dto/create-gas-station-fuel-type.dto';

@Injectable()
export class GasStationFuelTypeService {
    constructor(@InjectModel(GasStationFuelType) private gasStationFuelTypeRepo: typeof GasStationFuelType){}

    async create(createGasSationFuelTypesDto: CreateGasSationFuelTypesDto):Promise<GasStationFuelType>{
        return  await this.gasStationFuelTypeRepo.create(createGasSationFuelTypesDto)
    }

    findAll():Promise<GasStationFuelType[]> {
        return this.gasStationFuelTypeRepo.findAll({include: {all: true}});
    }

    findOne(id: number):Promise<GasStationFuelType> {
        return this.gasStationFuelTypeRepo.findByPk(id, {include: {all:true}});
    }

    update(id: number, updateGasSationFuelTypesDto: UpdateGasSationFuelTypesDto){
        return this.gasStationFuelTypeRepo.update(updateGasSationFuelTypesDto, {where: {id}, returning: true})
    }

    async delete(id: number):Promise<number>{
        return await this.gasStationFuelTypeRepo.destroy({where: {id}})
    }
}
