import { database } from '../database';
import { Request, Response } from 'express'

export class UsersController  {
    createUsers (request: Request, response: Response): Response {
        const { name } = request.body;
        
        if(name.length < 1){
            return response.status(403).json({mensagem:'Impossível criar usuário sem nome válido'});
        }
        database.push(name);
        return response.status(201).json({mensagem:`Usuário ${name} criado com sucesso!`});
    }

    getUsers (resquest: Request, response: Response): Response {
        return response.status(200).json(database);
    }
}
