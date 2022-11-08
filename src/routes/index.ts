import { Router, Request, Response } from 'express';

import * as MeusProjetosPageController from '../controllers/meusProjetosPageController';
import * as ListaProjetosController from '../controllers/listaProjetosController';
import * as LogonAuthController  from '../controllers/logonAuthController';
import * as novoProjetoController  from '../controllers/novoProjetoController';
import * as meuProjetoController  from '../controllers/meuProjetoController';


const router = Router();

router.get('/', LogonAuthController.logonAuthHome);
router.get('/logon', LogonAuthController.logonAuthHome);
router.get('/cadastro', LogonAuthController.logonCadastro);
router.get('/complementoCadastro', LogonAuthController.complementoCadastro);
router.get('/meusProjetos',MeusProjetosPageController.meusProjetosHome);
router.get('/meuProjeto/:idProjeto', meuProjetoController.meuProjeto);
router.get('/listaProjetos', ListaProjetosController.listaProjetosHome);
router.get('/novoProjeto', novoProjetoController.novoProjeto);
router.post('/novoProjeto',novoProjetoController.salvaNovoProjeto);

export default router;