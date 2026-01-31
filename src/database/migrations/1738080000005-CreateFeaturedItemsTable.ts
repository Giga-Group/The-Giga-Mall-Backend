import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFeaturedItemsTable1738080000005
  implements MigrationInterface
{
  name = 'CreateFeaturedItemsTable1738080000005';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "featured_items" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "featured_items" (
        "id" SERIAL NOT NULL,
        "image" character varying NOT NULL,
        "name" character varying NOT NULL,
        "description" text NOT NULL,
        "url" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_featured_items_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "featured_items"
    `);
  }
}
