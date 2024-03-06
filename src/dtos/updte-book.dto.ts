import { PartialType } from "@nestjs/mapped-types";
import CreateBookDto from "./create-book.dto";
import { IsOptional, IsString } from "class-validator";

class UpdatebookDto extends PartialType(CreateBookDto){
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    gender: string;

    @IsOptional()
    @IsString()
    yearpublication: Date;

}

export default UpdatebookDto;