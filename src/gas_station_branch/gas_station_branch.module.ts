import { Module } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { GasStationBranchController } from './gas_station_branch.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gas-station-branch.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationBranch])],
  providers: [GasStationBranchService],
  controllers: [GasStationBranchController]
})
export class GasStationBranchModule {}
