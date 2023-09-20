import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gas-station-branch.model';
import { CreateGasStationBranchDto } from './dto/create-gas-station-branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas-station-branch.dto';

@Injectable()
export class GasStationBranchService {
    constructor(@InjectModel(GasStationBranch) private gasStationBranchRepo: typeof GasStationBranch){}

    async create(createGasStationBranchDto: CreateGasStationBranchDto):Promise<GasStationBranch>{
        return  await this.gasStationBranchRepo.create(createGasStationBranchDto)
    }

    findAll():Promise<GasStationBranch[]> {
        return this.gasStationBranchRepo.findAll({include: {all: true}});
    }

    findOne(id: number):Promise<GasStationBranch> {
        return this.gasStationBranchRepo.findByPk(id, {include: {all:true}});
    }

    update(id: number, updateGasStationBranchDto: UpdateGasStationBranchDto){
        return this.gasStationBranchRepo.update(updateGasStationBranchDto, {where: {id}, returning: true})
    }

    async delete(id: number):Promise<number>{
        return await this.gasStationBranchRepo.destroy({where: {id}})
    }
}
