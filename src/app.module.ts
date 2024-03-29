import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { AuthorsService } from './authors/authors.service';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default(5432),
        DB_PORT: Joi.string().required(), 
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        MESSAGE: Joi.string().required(),

      })
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'libro',
      password: '1234',
      database: 'libros',
      autoLoadEntities: true,
      synchronize: false,      
    }),
    BooksModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
