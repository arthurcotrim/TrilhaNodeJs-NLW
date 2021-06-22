import { EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User";

// DEFININDO O REPOSITORIO 
@EntityRepository(User) 
class UsersRepositores extends Repository<User>{}

export {UsersRepositores}
