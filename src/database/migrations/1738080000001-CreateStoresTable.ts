import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStoresTable1738080000001 implements MigrationInterface {
  name = 'CreateStoresTable1738080000001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop table if it exists (to handle schema changes)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "stores" CASCADE
    `);

    // Create stores table with integer ID and FK to floors
    await queryRunner.query(`
      CREATE TABLE "stores" (
        "id" SERIAL NOT NULL,
        "slug" character varying NOT NULL,
        "name" character varying NOT NULL,
        "description" text NOT NULL,
        "logo" character varying,
        "backgroundImage" character varying,
        "contact" jsonb,
        "floorId" integer,
        "mapPosition" jsonb,
        "hasOffers" boolean NOT NULL DEFAULT false,
        "acceptsGiftCard" boolean NOT NULL DEFAULT false,
        "category" character varying,
        "subcategory" character varying,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_stores_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_stores_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_stores_floor" FOREIGN KEY ("floorId") 
          REFERENCES "floors"("id") 
          ON DELETE SET NULL 
          ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "stores"
    `);
  }
}