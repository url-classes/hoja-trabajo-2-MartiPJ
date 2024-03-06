import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import CreateBookDto from "./dtos/create-book.dto";

@Controller('books')
export class BooksController{
    constructor(
        private readonly bookService: BooksService
    ){}

    @Get()
    findAll(){
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.bookService.findOne(id);
    }

    @Post()
    postBook(@Body() body: CreateBookDto){
        return this.bookService.createBook(body);
    }
}