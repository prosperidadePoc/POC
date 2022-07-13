import express, {Request, Response} from "express";
import mainRoutes from './controllers/routes/index';

import mustache from 'mustache-express';

import path from 'path';

import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname,'public')));

server.use(express.urlencoded({extended:true}));

server.use(mainRoutes);
server.use((req: Request, res:Response)=>{
    res.send('Página não encontrada');
});

server.listen(process.env.PORT);

