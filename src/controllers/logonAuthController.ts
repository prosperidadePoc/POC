import {Request, Response} from 'express';

export const logonAuthHome = (req:Request, res:Response) => {

    res.render('pages/logon');

}

export const logonCadastro = (req:Request, res:Response) => {

    res.render('pages/cadastro');

}

export const complementoCadastro = (req:Request, res:Response) => {

    res.render('pages/complementoCadastro');

}