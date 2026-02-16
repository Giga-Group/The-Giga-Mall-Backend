import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVisitUsTable1738080000025 implements MigrationInterface {
  name = 'CreateVisitUsTable1738080000025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop table if it exists (to handle schema changes)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "visit_us" CASCADE
    `);

    // Create visit_us table
    await queryRunner.query(`
      CREATE TABLE "visit_us" (
        "id" SERIAL NOT NULL,
        "slug" character varying NOT NULL,
        "name" character varying NOT NULL,
        "description" text NOT NULL,
        "backgroundImage" character varying,
        "mobileViewImage" character varying,
        "contact" jsonb,
        "floorId" integer,
        "mapPosition" jsonb,
        "acceptsGiftCard" boolean NOT NULL DEFAULT false,
        "category" character varying,
        "subcategory" character varying,
        "isTopPick" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_visit_us_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_visit_us_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_visit_us_floor" FOREIGN KEY ("floorId") 
          REFERENCES "floors"("id") 
          ON DELETE SET NULL 
          ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "visit_us"
    `);
  }
}
