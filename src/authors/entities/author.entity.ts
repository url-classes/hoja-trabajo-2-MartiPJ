import { number } from "joi";
import Book from "src/books/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('authors')
class Author{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'varchar', length: 44})
    name: string;

    @Column({type: 'date'})
    birthday: Date;

    @OneToMany(()=> Book, (book)=> book.author)
    book: Book[]
}

export default Author;