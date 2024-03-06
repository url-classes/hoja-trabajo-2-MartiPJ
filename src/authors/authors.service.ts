import { Injectable, NotFoundException } from '@nestjs/common';
import Author from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateAuthorDto from './dtos/create-authors.dtos';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly AuthorRepository: Repository<Author>
    ){}

    findAll(){
        return this.AuthorRepository.find();
    }

    async findOne(id: number){
        const author = await this.AuthorRepository.findOne({
            where: {id}
        });

        if(author === null){
            throw new NotFoundException(`author #${id} not found`);
        }

        return author;
    }

    createAuthor(new_author: CreateAuthorDto){
        const author = this.AuthorRepository.create(new_author);
        return this.AuthorRepository.save(author);
    }
}
