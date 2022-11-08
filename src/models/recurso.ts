import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 
import { Projeto } from './projeto';
import { RecursoProjeto } from './recursoProjeto';


export interface recursoInstance extends Model {
    id: number,
    tituloRecurso:string,
    descricaoRecurso: string,
    createdUser:string,
    updatedUser:string
}

export const Recurso = database.define<recursoInstance> ("Recurso",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    tituloRecurso: {
        type: DataTypes.STRING,
        allowNull:false
    },
    descricaoRecurso: {
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
    tableName: 'recursos'
}
);

Recurso.belongsToMany(Projeto, {
    through: {
        model: RecursoProjeto
    },
    constraints: true
})

Projeto.belongsToMany(Recurso, {
    through: {
        model: RecursoProjeto
    },
    constraints: true
})


Projeto.hasMany(RecursoProjeto);
RecursoProjeto.belongsTo(Projeto);
Recurso.hasMany(RecursoProjeto);
RecursoProjeto.belongsTo(Recurso);