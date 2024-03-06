import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Book from 'src/books/entities/book.entity';
import Author from './entities/author.entity';
import { BooksController } from 'src/books/books.controller';
import { AuthorsController } from './authors.controller';
import { BooksService } from 'src/books/books.service';
import { AuthorsService } from './authors.service';

@Module({
    imports:[TypeOrmModule.forFeature([Author])],
    controllers: [AuthorsController],
    providers: [AuthorsService],
})
export class AuthorsModule {}
