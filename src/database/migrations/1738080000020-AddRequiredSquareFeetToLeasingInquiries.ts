import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRequiredSquareFeetToLeasingInquiries1738080000020
  implements MigrationInterface
{
  name = 'AddRequiredSquareFeetToLeasingInquiries1738080000020';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      ADD COLUMN IF NOT EXISTS "requiredSquareFeet" character varying
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "leasing_inquiries"
      DROP COLUMN IF EXISTS "requiredSquareFeet"
    `);
  }
}

