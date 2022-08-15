"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = require("../database");
class UsersController {
    createUsers(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ mensagem: 'Impossível criar usuário sem nome válido' });
        }
        database_1.database.push(name);
        return response.status(201).json({ mensagem: `Usuário ${name} criado com sucesso!` });
    }
    getUsers(resquest, response) {
        return response.status(200).json(database_1.database);
    }
}
exports.UsersController = UsersController;
