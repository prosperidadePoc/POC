import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 


export interface recursoProjetoInstance extends Model {
    id: number,
    createdUser:string,
    updatedUser:string
}

export const RecursoProjeto = database.define<recursoProjetoInstance> ("RecursoProjeto",{
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