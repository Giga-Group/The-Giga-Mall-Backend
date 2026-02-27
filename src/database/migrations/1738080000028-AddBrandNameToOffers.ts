import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBrandNameToOffers1738080000028 implements MigrationInterface {
  name = 'AddBrandNameToOffers1738080000028';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add brandName column
    await queryRunner.query(`
      ALTER TABLE "offers" 
      ADD COLUMN IF NOT EXISTS "brandName" character varying
    `);

    // Change type column to support arrays (text array)
    await queryRunner.query(`
      ALTER TABLE "offers" 
      ALTER COLUMN "type" TYPE text[] USING 
      CASE 
        WHEN "type" IS NULL THEN NULL::text[]
        ELSE ARRAY["type"]::text[]
      END
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revert type column back to varchar
    await queryRunner.query(`
      ALTER TABLE "offers" 
      ALTER COLUMN "type" TYPE character varying USING 
      CASE 
        WHEN "type" IS NULL THEN NULL
        WHEN array_length("type", 1) = 1 THEN "type"[1]
        ELSE "type"::text
      END
    `);

    // Remove brandName column
    await queryRunner.query(`
      ALTER TABLE "offers" 
      DROP COLUMN IF EXISTS "brandName"
    `);
  }
}
