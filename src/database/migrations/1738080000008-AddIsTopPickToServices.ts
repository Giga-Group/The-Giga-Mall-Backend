import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsTopPickToServices1738080000008
  implements MigrationInterface
{
  name = 'AddIsTopPickToServices1738080000008';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "services"
      ADD COLUMN IF NOT EXISTS "isTopPick" boolean NOT NULL DEFAULT false
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "services"
      DROP COLUMN IF EXISTS "isTopPick"
    `);
  }
}
