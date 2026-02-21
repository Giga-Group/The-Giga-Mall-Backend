import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateStoreCategoriesToArray1738080000026 implements MigrationInterface {
  name = 'UpdateStoreCategoriesToArray1738080000026';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop subcategory column
    await queryRunner.query(`
      ALTER TABLE "stores" DROP COLUMN IF EXISTS "subcategory"
    `);

    // Change category column to text array
    await queryRunner.query(`
      ALTER TABLE "stores" 
      ALTER COLUMN "category" TYPE text[] 
      USING CASE 
        WHEN "category" IS NULL THEN NULL::text[]
        ELSE ARRAY["category"]::text[]
      END
    `);

    // Rename category to categories
    await queryRunner.query(`
      ALTER TABLE "stores" RENAME COLUMN "category" TO "categories"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Rename categories back to category
    await queryRunner.query(`
      ALTER TABLE "stores" RENAME COLUMN "categories" TO "category"
    `);

    // Change back to varchar
    await queryRunner.query(`
      ALTER TABLE "stores" 
      ALTER COLUMN "category" TYPE character varying 
      USING CASE 
        WHEN array_length("category", 1) > 0 THEN "category"[1]
        ELSE NULL
      END
    `);

    // Add subcategory column back
    await queryRunner.query(`
      ALTER TABLE "stores" ADD COLUMN "subcategory" character varying
    `);
  }
}
