import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { FuelTypesModule } from './fuel_types/fuel_types.module';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
      logging: true
    }),
    GasStationModule,
    GasStationBranchModule,
    FuelTypesModule,
    GasStationFuelTypeModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
