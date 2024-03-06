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
    @MaxLength(44)
    title: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    genres: string;

    @IsDate()
    @MinLength(1)
    @MaxLength(255)
    published: Date;

}