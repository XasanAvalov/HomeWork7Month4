import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { FuelTypes } from "src/fuel_types/models/fuel-types.model";
import { GasStationBranch } from "src/gas_station_branch/models/gas-station-branch.model";


interface IGasStationFuelTypes {
    gas_station_branch_id: number;
    fuel_type_id: number;
    price: number;
    is_bor: boolean;
}
@Table({tableName: 'gas_station_fuel_type'})
export class GasStationFuelType extends Model<GasStationFuelType, IGasStationFuelTypes>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @ForeignKey(() => GasStationBranch)
    @Column({
        type: DataType.INTEGER
    })
    gas_station_branch_id: number

    @BelongsTo(() => GasStationBranch)
    gasStationBranch: GasStationBranch;

    @ForeignKey(() => FuelTypes)
    @Column({
        type: DataType.INTEGER
    })
    fuel_type_id: number

    @BelongsTo(() => FuelTypes)
    fuelTypes: FuelTypes;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    prace: number

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_bor: boolean
}