import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 


export interface UserInstance extends Model {
    id: number,
    nome: string,
    email:string,
    statusUser:boolean
}

export const User = database.define<UserInstance> ("User",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    statusUser: {
        type: DataTypes.STRING,
        defaultValue: 'Ativo'
    }
},
{
    tableName: 'users'
}
);