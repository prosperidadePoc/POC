import { use } from "passport";

type projeto = {
    idProjeto: number,
    user:number,
    competencia:number,
    tituloProjeto:string,
    imagemProjeto:string,
    descricaoProjeto: string,
    localProjeto:string,
    statusProjeto:string,
    dataInicioProjeto:string,
    dataFimProjeto:string
};

const dadosProjetos: projeto[]  = [
    {
        idProjeto: 1,
        user:1,
        competencia:1,
        tituloProjeto:'Praça Comunitária',
        imagemProjeto:'pracaComunitaria.png',
        descricaoProjeto:'O Projeto PRAÇA COMUNITÁRIA tem como objetivo integrar o espaço e a comunidade em atividades recreativas, culturais e esportivas',
        localProjeto: 'cidade A',
        statusProjeto:'ativo',
        dataInicioProjeto:'10-09-2020',
        dataFimProjeto:''
    },
    {
        idProjeto: 2,
        user:1,
        competencia:1,
        tituloProjeto:'Voluntários União',
        imagemProjeto:'cidade_solidaria.jpeg',
        descricaoProjeto:'O Projeto VOLUNTÁRIOS UNIÃO tem como objetivo criar uma rede de voluntariado destinados às causas do Meio Ambiente',
        localProjeto: 'cidade A',
        statusProjeto:'ativo',
        dataInicioProjeto:'02-10-2020',
        dataFimProjeto:''
    },
    {
        idProjeto: 3,
        user:1,
        competencia:1,
        tituloProjeto:'Horta em Comunidade',
        imagemProjeto:'hortaComunitaria.jpeg',
        descricaoProjeto:'O Projeto HORTA EM COMUNIDADE tem como objetivo fomentar a comunidade local no aprendizado de boas práticas e na produção de frutas e hortaliças saudáveis',
        localProjeto: 'cidade A',
        statusProjeto:'ativo',
        dataInicioProjeto:'11-15-2021',
        dataFimProjeto:''
    },
    {
        idProjeto: 4,
        user:1,
        competencia:1,
        tituloProjeto:'Bordar para integrar',
        imagemProjeto:'bordar_para_integrar.png',
        descricaoProjeto:'O Projeto BORDAR PARA INTEGRAR tem como objetivo promover o desenvolvimento sustentável de grupos locais através do ensino e da produção de peças bordadas ',
        localProjeto: 'cidade B',
        statusProjeto:'ativo',
        dataInicioProjeto:'12-01-2021',
        dataFimProjeto:''
    },
    {
        idProjeto: 5,
        user:1,
        competencia:1,
        tituloProjeto:'Devs Solidários',
        imagemProjeto:'devs_solidarios.jpeg',
        descricaoProjeto:'O Projeto DEVs SOLIDÁRIOS tem como objetivo fomentar a criação de aplicativos para o bem comum da comunidade através da capacitação e do suporte ao desenvolvedor',
        localProjeto: 'cidade B',
        statusProjeto:'ativo',
        dataInicioProjeto:'04-18-2021',
        dataFimProjeto:''
    },
];

export const Projeto = {
    getAll: ():projeto[] => {
        return dadosProjetos;
    },

    getProjetoById: (id:number) :projeto[] => {
        return dadosProjetos.filter(item => {
            if (item.idProjeto === id) {
                return true;
            } else {
                return false;
            }
        })
    },

    getMeusProjetos: (user:number):projeto[] => {
        return dadosProjetos.filter(item => {
            if (item.user === user) {
                return true;
            } else {
                return false;
            }
        });
    },

    getProjetosMeuLocal:(user:number, competencia:number, local:string):projeto[] => {
        return dadosProjetos.filter(item => {
            if (item.user === user && item.competencia === competencia && item.localProjeto === local) {
                return true;
            } else {
                return false;
            }
        });
    },

    getProjetosOutroLocal:(user:number, competencia:number, local:string):projeto[] => {
        return dadosProjetos.filter(item => {
            if (item.user === user && item.competencia === competencia && item.localProjeto != local) {
                return true;
            } else {
                return false;
            }
        });
    }
};
