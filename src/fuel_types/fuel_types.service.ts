import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FuelTypes } from './models/fuel-types.model';
import { CreateFuelTypesDto } from './dto/create-fuel-types.dto';
import { UpdateFuelTypesDto } from './dto/update-fuel-types.dto';

@Injectable()
export class FuelTypesService {
    constructor(@InjectModel(FuelTypes) private fuelTypesRepo: typeof FuelTypes){}

    async create(createFuelTypesDto: CreateFuelTypesDto):Promise<FuelTypes>{
        return  await this.fuelTypesRepo.create(createFuelTypesDto)
    }

    findAll():Promise<FuelTypes[]> {
        return this.fuelTypesRepo.findAll({include: {all: true}});
    }

    findOne(id: number):Promise<FuelTypes> {
        return this.fuelTypesRepo.findByPk(id, {include: {all:true}});
    }

    update(id: number, updateFuelTypesDto: UpdateFuelTypesDto){
        return this.fuelTypesRepo.update(updateFuelTypesDto, {where: {id}, returning: true})
    }

    async delete(id: number):Promise<number>{
        return await this.fuelTypesRepo.destroy({where: {id}})
    }
}
