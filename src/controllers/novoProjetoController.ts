import {Request, Response} from 'express';

export const novoProjeto = (req:Request, res:Response) => {

    res.render('pages/novoProjeto');

}