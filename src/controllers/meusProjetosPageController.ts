import {Request, Response} from 'express';

export const meusProjetosHome = (req:Request, res:Response) => {

    res.render('pages/meusProjetos');

}