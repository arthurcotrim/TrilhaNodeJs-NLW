import { EntityRepository, Repository} from "typeorm";
import {Tag} from "../entities/Tag";

// DEFININDO O REPOSITORIO 
@EntityRepository(Tag) 
class TagsRepositories extends Repository<Tag>{}

export {TagsRepositories}