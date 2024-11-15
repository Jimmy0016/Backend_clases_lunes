import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminadoCorreoTableUser1731681064774 implements MigrationInterface {
    name = 'EliminadoCorreoTableUser1731681064774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
