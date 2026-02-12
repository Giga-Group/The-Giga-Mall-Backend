import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjectsTable1738080000024 implements MigrationInterface {
  name = 'CreateProjectsTable1738080000024';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop table if it exists (to handle schema changes)
    await queryRunner.query(`
      DROP TABLE IF EXISTS "projects" CASCADE
    `);

    // Create projects table
    await queryRunner.query(`
      CREATE TABLE "projects" (
        "id" SERIAL NOT NULL,
        "slug" character varying NOT NULL,
        "title" character varying NOT NULL,
        "description" text,
        "category" character varying,
        "status" character varying NOT NULL DEFAULT 'IN_PROGRESS',
        "location" character varying,
        "images" text[] DEFAULT '{}',
        "details" jsonb,
        "isCompleted" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_projects_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_projects_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "projects"
    `);
  }
}
