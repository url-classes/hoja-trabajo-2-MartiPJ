import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Book from './entities/book.entity';
import CreateBookDto from './dtos/create-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly BookRepository: Repository<Book>
    ){}

    findAll(){
        return this.BookRepository.find();
    }

    async findOne(id: number){
        const book = await this.BookRepository.findOne({
            where: {id}
        });

        if(book === null){
            throw new NotFoundException(`book #${id} not found`);
        }

        return book;
    }

    createBook(new_book: CreateBookDto){
        const book = this.BookRepository.create(new_book);
        return this.BookRepository.save(book);
    }
}
