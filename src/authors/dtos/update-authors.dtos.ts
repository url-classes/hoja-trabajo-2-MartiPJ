import { PartialType } from "@nestjs/mapped-types";
import CreateAuthorDto from "./create-authors.dtos";

export default class UpdatebookDto extends PartialType(CreateAuthorDto){}