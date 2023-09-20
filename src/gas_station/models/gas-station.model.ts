import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { GasStationBranch } from "src/gas_station_branch/models/gas-station-branch.model";


interface IGasStation {
    mainGasStationName: string
}
@Table({tableName: 'gas_station'})
export class GasStation extends Model<GasStation, IGasStation>{
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
    mainGasStationName: string

    @HasMany(() => GasStationBranch)
    gasStationBranch: GasStationBranch[]
}