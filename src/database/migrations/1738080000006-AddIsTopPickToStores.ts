import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsTopPickToStores1738080000006 implements MigrationInterface {
  name = 'AddIsTopPickToStores1738080000006';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "stores"
      ADD COLUMN IF NOT EXISTS "isTopPick" boolean NOT NULL DEFAULT false
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "stores"
      DROP COLUMN IF EXISTS "isTopPick"
    `);
  }
}
