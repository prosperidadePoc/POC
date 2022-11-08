import { Model, DataTypes } from 'sequelize';
import { database } from '../instances/pg'; 
import { User } from './user';
import { UserProjeto } from './userProjeto';


export interface projetoInstance extends Model {
    id: number,
    tituloProjeto: string,
    descricaoProjeto:string,
    imagemProjeto:string,
    localProjeto:string,
    statusProjeto:string,
    createdUser:string,
    updatedUser:string
}

export const Projeto = database.define<projetoInstance> ("Projeto",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    tituloProjeto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricaoProjeto: {
        type: DataTypes.STRING
    },
    imagemProjeto: {
        type: DataTypes.STRING
    },
    localProjeto: {
        type: DataTypes.STRING
    },
    statusProjeto: {
        type: DataTypes.STRING,
        defaultValue: 'Ativo'
    },
    createdUser: {
        type:DataTypes.STRING
    },
    updatedUser: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'projetos'
}
);

Projeto.belongsToMany(User, {
    through: {
        model: UserProjeto
    },
    constraints: true
})

User.belongsToMany(Projeto, {
    through: {
        model: UserProjeto
    },
    constraints: true
})


Projeto.hasMany(UserProjeto);
UserProjeto.belongsTo(Projeto);
User.hasMany(UserProjeto);
UserProjeto.belongsTo(User);