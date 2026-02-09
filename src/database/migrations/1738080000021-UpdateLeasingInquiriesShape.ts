import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateLeasingInquiriesShape1738080000021
  implements MigrationInterface
{
  name = 'UpdateLeasingInquiriesShape1738080000021';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Rename columns to match new naming
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      RENAME COLUMN "name" TO "fullName"
    `);

    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      RENAME COLUMN "message" TO "additionalMessage"
    `);

    // Drop unused columns
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      DROP COLUMN IF EXISTS "projectId"
    `);

    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      DROP COLUMN IF EXISTS "status"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Recreate dropped columns (simplified)
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      ADD COLUMN IF NOT EXISTS "projectId" integer
    `);

    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      ADD COLUMN IF NOT EXISTS "status" character varying NOT NULL DEFAULT 'PENDING'
    `);

    // Rename columns back
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      RENAME COLUMN "fullName" TO "name"
    `);

    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      RENAME COLUMN "additionalMessage" TO "message"
    `);
  }
}

