import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEventsTable1738080000009 implements MigrationInterface {
  name = 'CreateEventsTable1738080000009';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "events" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "events" (
        "id" SERIAL NOT NULL,
        "eventName" character varying NOT NULL,
        "description" text NOT NULL,
        "navigateLink" character varying NOT NULL,
        "startDate" character varying NOT NULL,
        "endDate" character varying,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_events_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "events"
    `);
  }
}
