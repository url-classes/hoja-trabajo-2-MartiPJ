import{
    IsString,
    IsOptional,
    MaxLength,
    MinLength,
    IsDate,
    
} from 'class-validator';

export default class CreateAuthorDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsDate()
    birthday: Date;

    

}