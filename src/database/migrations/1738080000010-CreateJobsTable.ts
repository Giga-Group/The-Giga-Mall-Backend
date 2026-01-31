import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJobsTable1738080000010 implements MigrationInterface {
  name = 'CreateJobsTable1738080000010';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "jobs" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "jobs" (
        "id" SERIAL NOT NULL,
        "jobTitle" character varying NOT NULL,
        "description" text NOT NULL,
        "skills" text[] NOT NULL DEFAULT '{}',
        "requirements" text[] NOT NULL DEFAULT '{}',
        "niceToHave" text[],
        "isClosed" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_jobs_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "jobs"
    `);
  }
}
