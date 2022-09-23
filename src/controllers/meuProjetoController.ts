import {Request, Response} from 'express';
import { Projeto } from '../models/projetos';

export const meuProjeto = (req:Request, res:Response) => {
    let id: number = parseInt(req.params.idProjeto)
    let dadosProjeto = Projeto.getProjetoById(id);

    console.log(dadosProjeto);

    res.render('pages/meuProjeto', {dadosProjeto});
}