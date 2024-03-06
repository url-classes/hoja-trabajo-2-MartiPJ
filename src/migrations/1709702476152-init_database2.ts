import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase21709702476152 implements MigrationInterface {
    name = 'InitDatabase21709702476152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP COLUMN "genres"`);
        await queryRunner.query(`DROP TYPE "public"."Books_genres_enum"`);
        await queryRunner.query(`ALTER TABLE "Books" ADD "genres" character varying(44) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP COLUMN "genres"`);
        await queryRunner.query(`CREATE TYPE "public"."Books_genres_enum" AS ENUM('action')`);
        await queryRunner.query(`ALTER TABLE "Books" ADD "genres" "public"."Books_genres_enum" NOT NULL DEFAULT 'action'`);
    }

}
