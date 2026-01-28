import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFloors1738080000000 implements MigrationInterface {
  name = 'CreateFloors1738080000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop table if it exists (to handle schema changes from uuid to integer)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "floors" CASCADE
    `);

    // Create floors table with integer ID
    await queryRunner.query(`
      CREATE TABLE "floors" (
        "id" SERIAL NOT NULL,
        "floorName" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_floors_floorName" UNIQUE ("floorName"),
        CONSTRAINT "PK_floors_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "floors"
    `);
  }
}

