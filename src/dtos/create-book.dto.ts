import{
    IsString,
    IsOptional,
    MaxLength,
    MinLength,
    
} from 'class-validator';

export default class CreateBookDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    title: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    gender: string;
    
    yearpublication: Date;

}