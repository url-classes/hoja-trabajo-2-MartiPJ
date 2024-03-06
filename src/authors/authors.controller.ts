import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import CreateAuthorDto from "./dtos/create-authors.dtos";

@Controller('authors')
export class AuthorsController{
    constructor(
        private readonly authorService: AuthorsService
    ){}

    @Get()
    findAll(){
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.authorService.findOne(id);
    }

    @Post()
    postAuthor(@Body() body: CreateAuthorDto){
        return this.authorService.createAuthor(body);
    }
}