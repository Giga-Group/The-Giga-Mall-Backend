import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateServicesTable1738080000004 implements MigrationInterface {
  name = 'CreateServicesTable1738080000004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop existing table if any (for clean schema)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "services" CASCADE
    `);

    // Create services table
    await queryRunner.query(`
      CREATE TABLE "services" (
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
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_services_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_services_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_services_floor" FOREIGN KEY ("floorId")
          REFERENCES "floors"("id")
          ON DELETE SET NULL
          ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "services"
    `);
  }
}

