import { getCustomRepository } from "typeorm";
import { UsersRepositores } from "../repositories/UsersRepositores"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, admin} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositores);

        // VERIFICA SE O EMAL ESTA VINDO VAZIO
        if (!email) {
            throw new Error("Email incorrect");
        }

        // PROCURA SE JA EXISTE ESSE EMAIL
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        
        // CRIA UM USUARIO
        const user = usersRepository.create({
            name,
            email,
            admin
        })

        // INSERINDO NA TABELA
        await usersRepository.save(user);

        return user;
    }
}

export {CreateUserService}
