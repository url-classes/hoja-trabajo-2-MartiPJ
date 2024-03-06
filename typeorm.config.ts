import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'libro',
  password: '1234',
  database: 'libros',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['./src/migrations/*.ts'],
});