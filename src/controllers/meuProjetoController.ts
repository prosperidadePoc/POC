import {Request, Response} from 'express';

export const meuProjeto = (req:Request, res:Response) => {
    let titulo = req.params.tituloProjeto;
    let imagem = req.params.imagemProjeto;
    let descricao = req.params.descricaoProjeto;

    res.render('pages/meuProjeto', {titulo, imagem, descricao});
}