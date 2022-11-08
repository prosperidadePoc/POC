import {Request, Response} from 'express';
import { database } from '../instances/pg';
import { User } from '../models/user';
import { Projeto } from '../models/projeto';
import { UserProjeto } from '../models/userProjeto';

database.sync({force:true}); // depois de funcionar userProjeto retirar essa linha

export const logonAuthHome = async (req:Request, res:Response) => {

    const novoUser = await User.create({
        nome:'Fernando Pelegrini',
        email:'pellegrinnif@gmail.com',
    });

    const novoProjeto = await Projeto.create ({
        tituloProjeto: 'Tempo de Criar',
        descricaoProjeto:'bla bla bla',
        imagemProjeto: 'imagem.jpg',
        localProjeto: 'local do Projeto'
    });
    await novoUser.addProjeto(novoProjeto);

    const projeto = await Projeto.findByPk(1,{include:[User]});
    console.log(projeto);
    const user = await User.findByPk(1);
    console.log(user);
    const userprojeto = await UserProjeto.findByPk(1);
    console.log(userprojeto);



    res.render('pages/logon');

}

export const logonCadastro = async (req:Request, res:Response) => {

    res.render('pages/cadastro');

}

export const complementoCadastro = async (req:Request, res:Response) => {

    res.render('pages/complementoCadastro');

}