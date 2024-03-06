import { PartialType } from "@nestjs/mapped-types";
import CreateBookDto from "./create-book.dto";
import { IsOptional, IsString } from "class-validator";

export default class UpdatebookDto extends PartialType(CreateBookDto){}
    