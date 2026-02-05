import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateContactSubmissionsTable1738080000022
  implements MigrationInterface
{
  name = 'CreateContactSubmissionsTable1738080000022';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "contact_submissions" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "contact_submissions" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "phone" character varying,
        "subject" character varying,
        "message" text NOT NULL,
        "status" character varying NOT NULL DEFAULT 'PENDING',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_contact_submissions_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_contact_submissions_email" UNIQUE ("email")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "contact_submissions"
    `);
  }
}

