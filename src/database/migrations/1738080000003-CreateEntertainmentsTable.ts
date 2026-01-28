import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntertainmentsTable1738080000003
  implements MigrationInterface
{
  name = 'CreateEntertainmentsTable1738080000003';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop existing table if any (for clean schema)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "entertainments" CASCADE
    `);

    // Create entertainments table
    await queryRunner.query(`
      CREATE TABLE "entertainments" (
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
        CONSTRAINT "UQ_entertainments_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_entertainments_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_entertainments_floor" FOREIGN KEY ("floorId")
          REFERENCES "floors"("id")
          ON DELETE SET NULL
          ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "entertainments"
    `);
  }
}

