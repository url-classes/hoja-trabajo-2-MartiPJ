import{Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { GenresStatus } from "../book-enum";
import Author from "src/authors/entities/author.entity";

@Entity('Books')
class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 44})
    title: string;

    @Column({type: 'date'})
    published: Date;

    //enum acepta un rango de opciones que son predefinidos en book-enum.ts
    @Column({type: 'varchar', length: 44})
    genres: string;

    @OneToMany(()=> Author, (author) => author.book)
    author: Author;
}

export default Book