import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 
import { User } from './user';
import { UserCompetencia } from './userCompetencia';


export interface competenciaInstance extends Model {
    id: number,
    codigoCompetencia: string,
    tituloCompetencia:string,
    createdUser:string,
    updatedUser:string
}

export const Competencia = database.define<competenciaInstance> ("Competencia",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    codigoCompetencia: {
        type: DataTypes.STRING
    },
    tituloCompetencia: {
        type: DataTypes.STRING
    },
    createdUser: {
        type:DataTypes.STRING
    },
    updatedUser: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'competencias'
}
);

Competencia.belongsToMany(User, {
    through: {
        model: UserCompetencia
    },
    constraints: true
})

User.belongsToMany(Competencia, {
    through: {
        model: UserCompetencia
    },
    constraints: true
})


Competencia.hasMany(UserCompetencia);
UserCompetencia.belongsTo(Competencia);
User.hasMany(UserCompetencia);
UserCompetencia.belongsTo(User);