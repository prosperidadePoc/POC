import { Router, Request, Response } from 'express';

import * as MeusProjetosPageController from '../controllers/meusProjetosPageController';
import * as ListaProjetosController from '../controllers/listaProjetosController';
import * as LogonAuthHome  from '../controllers/logonAuthController';
import * as novoProjetoController  from '../controllers/novoProjetoController';
import * as meuProjetoController  from '../controllers/meuProjetoController';


const router = Router();

router.get('/', LogonAuthHome.logonAuthHome);
router.get('/logon', LogonAuthHome.logonAuthHome);
router.get('/cadastro', LogonAuthHome.logonCadastro);
router.get('/complementoCadastro', LogonAuthHome.complementoCadastro);
router.get('/meusProjetos',MeusProjetosPageController.meusProjetosHome);
router.get('/meuProjeto/:idProjeto', meuProjetoController.meuProjeto);
router.get('/listaProjetos', ListaProjetosController.listaProjetosHome);
router.get('/novoProjeto', novoProjetoController.novoProjeto);

export default router;