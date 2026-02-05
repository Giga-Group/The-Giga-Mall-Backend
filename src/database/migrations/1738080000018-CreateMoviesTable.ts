import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoviesTable1738080000018 implements MigrationInterface {
  name = 'CreateMoviesTable1738080000018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "movies" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "movies" (
        "id" SERIAL NOT NULL,
        "title" character varying NOT NULL,
        "details" text NOT NULL,
        "status" character varying NOT NULL,
        "image" character varying,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_movies_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "movies"
    `);
  }
}

