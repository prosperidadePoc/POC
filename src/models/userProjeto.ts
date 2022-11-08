import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 


export interface userProjetoInstance extends Model {
    id: number,
    owner: boolean,
    admin: boolean,
    createdUser:string,
    updatedUser:string
}

export const UserProjeto = database.define<userProjetoInstance> ("UserProjeto",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    owner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    createdUser: {
        type: DataTypes.STRING
    },
    updatedUser: {
        type: DataTypes.STRING
    }
})

