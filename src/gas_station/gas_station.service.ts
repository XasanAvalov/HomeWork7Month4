import { CreateGasStationDto } from './dto/create-gas-station.dto';
import { Injectable } from '@nestjs/common';
import { GasStation } from './models/gas-station.model';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateGasStationDto } from './dto/update-gas-station.dto';

@Injectable()
export class GasStationService {
    constructor(@InjectModel(GasStation) private gasStationRepo: typeof GasStation){}

    async create(createGasStationDto: CreateGasStationDto):Promise<GasStation>{
        return  await this.gasStationRepo.create(createGasStationDto)
    }

    findAll():Promise<GasStation[]> {
        return this.gasStationRepo.findAll({include: {all: true}});
    }

    findOne(id: number):Promise<GasStation> {
        return this.gasStationRepo.findByPk(id, {include: {all:true}});
    }

    update(id: number, updateGasStationDto: UpdateGasStationDto){
        return this.gasStationRepo.update(updateGasStationDto, {where: {id}, returning: true})
    }

    async delete(id: number):Promise<number>{
        return await this.gasStationRepo.destroy({where: {id}})
    }
}
