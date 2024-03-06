import{
    IsString,
    IsOptional,
    MaxLength,
    MinLength,
    IsDate,
    
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

    @IsDate()
    @MinLength(1)
    @MaxLength(255)
    yearpublication: Date;

}