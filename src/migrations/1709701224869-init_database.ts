import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1709701224869 implements MigrationInterface {
    name = 'InitDatabase1709701224869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying(44) NOT NULL, "birthday" date NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Books_genres_enum" AS ENUM('action')`);
        await queryRunner.query(`CREATE TABLE "Books" ("id" SERIAL NOT NULL, "title" character varying(44) NOT NULL, "published" date NOT NULL, "genres" "public"."Books_genres_enum" NOT NULL DEFAULT 'action', CONSTRAINT "PK_45fc00b09d337eadf83e9240157" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Books"`);
        await queryRunner.query(`DROP TYPE "public"."Books_genres_enum"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
