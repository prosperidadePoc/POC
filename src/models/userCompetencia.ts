import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 


export interface userCompetenciaInstance extends Model {
    id: number,
    createdUser:string,
    updatedUser:string
}

export const UserCompetencia = database.define<userCompetenciaInstance> ("UserCompetencia",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    createdUser: {
        type: DataTypes.STRING
    },
    updatedUser: {
        type: DataTypes.STRING
    }
})