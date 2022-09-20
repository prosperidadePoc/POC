import {Request, Response} from 'express';
import { Projeto } from '../models/projetos';

export const listaProjetosHome = (req:Request, res:Response) => {
    let listMeuLocal = Projeto.getProjetosMeuLocal(1,1,'cidade A');
    let listOutrosLocais = Projeto.getProjetosOutroLocal(1,1,'cidade A');

    res.render('pages/listaProjetos', {
        listMeuLocal, listOutrosLocais
    });
}