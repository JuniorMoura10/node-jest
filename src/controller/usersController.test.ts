import { UsersController } from "./usersController"
import { Request } from 'express'
import { makeMockResponse } from "../mocks/mockResponse";

describe('UserController', () => {
    const usersController = new UsersController();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    it('Deve listar nossos usuários', () => {
        usersController.getUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(1)
    })

    it('Deve criar um novo usuário', ()=>{
        mockRequest.body = {
            name: 'Novo Usuário'
        }

        usersController.createUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({mensagem:`Usuário Novo Usuário criado com sucesso!`})
       
    }) 
    
    it('Não deve criar usuário com o nome em branco', ()=>{
        mockRequest.body = {
            name: ''
        }

        usersController.createUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem:'Impossível criar usuário sem nome válido'})
    })
    

})