import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { GasStation } from "src/gas_station/models/gas-station.model";
import { GasStationFuelType } from "src/gas_station_fuel_type/models/gas-station-fuel-type.model";


interface IGasStationBranch {
    gas_station_id: number;
    branch_name: string;
    address: string;
    location: string;
    phone_number: string
}
@Table({tableName: 'gas_station_branch'})
export class GasStationBranch extends Model<GasStationBranch, IGasStationBranch>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @ForeignKey(() => GasStation)
    @Column({
        type: DataType.INTEGER
    })
    gas_station_id: number

    @BelongsTo(() => GasStation)
    gasStation: GasStation;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    branch_name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    location: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone_number: string

    @HasMany(() => GasStationFuelType)
    gasStationFuelType: GasStationFuelType[]
}