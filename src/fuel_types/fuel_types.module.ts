import { Module } from '@nestjs/common';
import { FuelTypesService } from './fuel_types.service';
import { FuelTypesController } from './fuel_types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelTypes } from './models/fuel-types.model';

@Module({
  imports: [SequelizeModule.forFeature([FuelTypes])],
  providers: [FuelTypesService],
  controllers: [FuelTypesController]
})
export class FuelTypesModule {}
