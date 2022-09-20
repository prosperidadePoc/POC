import {Request, Response} from 'express';

import { Projeto } from "../models/projetos";

export const meusProjetosHome = (req:Request, res:Response) => {
    let list = Projeto.getMeusProjetos(1);

    res.render('pages/meusProjetos', {
       list
    });

}