import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsTopPickToDines1738080000007 implements MigrationInterface {
  name = 'AddIsTopPickToDines1738080000007';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "dines"
      ADD COLUMN IF NOT EXISTS "isTopPick" boolean NOT NULL DEFAULT false
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "dines"
      DROP COLUMN IF EXISTS "isTopPick"
    `);
  }
}
