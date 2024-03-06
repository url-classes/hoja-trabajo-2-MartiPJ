import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Book from './entities/book.entity';
import Author from 'src/authors/entities/author.entity';
import { BooksController } from './books.controller';
import { AuthorsController } from 'src/authors/authors.controller';
import { BooksService } from './books.service';
import { AuthorsService } from 'src/authors/authors.service';

@Module({
    imports:[TypeOrmModule.forFeature([Book,Author])],
    controllers: [BooksController, AuthorsController],
    providers: [BooksService, AuthorsService],
})
export class BooksModule {}
