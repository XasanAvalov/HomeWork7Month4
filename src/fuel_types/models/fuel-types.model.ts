import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GasStationFuelType } from "src/gas_station_fuel_type/models/gas-station-fuel-type.model";


interface IFuelTypes{
    name: string
}
@Table({tableName: 'fuel_types'})
export class FuelTypes extends Model<FuelTypes, IFuelTypes>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string


    @HasMany(() => GasStationFuelType)
    gasStationFuelType: GasStationFuelType[]
}