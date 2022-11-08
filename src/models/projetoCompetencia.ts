import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 


export interface projetoCompetenciaInstance extends Model {
    id: number,
    createdUser:string,
    updatedUser:string
}

export const ProjetoCompetencia = database.define<projetoCompetenciaInstance> ("ProjetoCompetencia",{
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