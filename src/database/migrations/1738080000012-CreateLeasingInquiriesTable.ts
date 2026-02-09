import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLeasingInquiriesTable1738080000012
  implements MigrationInterface
{
  name = 'CreateLeasingInquiriesTable1738080000012';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "leasing_inquiries" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "leasing_inquiries" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "phone" character varying NOT NULL,
        "message" text,
        "projectId" integer,
        "status" character varying NOT NULL DEFAULT 'PENDING',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_leasing_inquiries_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_leasing_inquiries_email" UNIQUE ("email")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "leasing_inquiries"
    `);
  }
}
