import {Request, Response} from 'express';
import { Projeto } from '../models/projeto';
import { User } from '../models/user';


export const novoProjeto = async (req:Request, res:Response) => {

    res.render('pages/novoProjeto');

}

export const salvaNovoProjeto = async (req: Request, res: Response) => {
    let { titulo, descricao, imagem, local  } = req.body;

    console.log(req.body);
    console.log(titulo, descricao, imagem, local);

    const novoProjeto = await Projeto.create({ 
        tituloProjeto: titulo,
        descricaoProjeto: descricao, 
        imagemProjeto:imagem, 
        localProjeto:local 
    });

    const usuario = await User.findByPk(1);

    await usuario.addProjeto([novoProjeto]);


      


    res.render('pages/meusProjetos');
}