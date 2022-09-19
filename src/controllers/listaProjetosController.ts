import {Request, Response} from 'express';

export const listaProjetosHome = (req:Request, res:Response) => {

    res.render('pages/listaProjetos');

}