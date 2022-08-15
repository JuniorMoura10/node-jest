import { database } from '../database.js';

const usersController = {
    createUsers: (request, response) => {
        const { name } = request.body;
        if(name.length < 1){
            return response.status(403).json({mensagem:'Impossível criar usuário sem nome válido'});
        }
        database.push(name);
        return response.status(201).json(`Usuário ${name} criado com sucesso!`);
    },

    getUsers: (resquest, response) => {
        return response.status(200).json(database);
    }
}

export{ usersController }