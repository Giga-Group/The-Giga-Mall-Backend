import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOffersTable1738080000019 implements MigrationInterface {
  name = 'CreateOffersTable1738080000019';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "offers" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "offers" (
        "id" SERIAL NOT NULL,
        "title" character varying NOT NULL,
        "description" text NOT NULL,
        "image" character varying NOT NULL,
        "slug" character varying NOT NULL,
        "type" character varying,
        "startDate" character varying NOT NULL,
        "endDate" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_offers_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_offers_slug" UNIQUE ("slug")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "offers"
    `);
  }
}

