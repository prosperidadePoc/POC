import { Router, Request, Response } from 'express';

import * as MeusProjetosPageController from '../controllers/meusProjetosPageController';
import * as ListaProjetosController from '../controllers/listaProjetosController';
import * as LogonAuthHome  from '../controllers/logonAuthController';


const router = Router();

router.get('/logon', LogonAuthHome.logonAuthHome)
router.get('/cadastro', LogonAuthHome.logonCadastro)
router.get('/meusProjetos',MeusProjetosPageController.meusProjetosHome);
router.get('/listaProjetos', ListaProjetosController.listaProjetosHome);

router.get('/',(req: Request, res: Response)=> {
    res.send('home');
});

export default router;