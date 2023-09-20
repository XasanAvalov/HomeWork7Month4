import { Module } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { GasStationController } from './gas_station.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './models/gas-station.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStation])],
  providers: [GasStationService],
  controllers: [GasStationController]
})
export class GasStationModule {}
