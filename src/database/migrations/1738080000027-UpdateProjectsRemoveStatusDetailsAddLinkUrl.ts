import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProjectsRemoveStatusDetailsAddLinkUrl1738080000027 implements MigrationInterface {
  name = 'UpdateProjectsRemoveStatusDetailsAddLinkUrl1738080000027';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop status column
    await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN IF EXISTS "status"`);
    
    // Drop details column
    await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN IF EXISTS "details"`);
    
    // Add linkUrl column
    await queryRunner.query(`ALTER TABLE "projects" ADD "linkUrl" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove linkUrl column
    await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN IF EXISTS "linkUrl"`);
    
    // Restore details column
    await queryRunner.query(`ALTER TABLE "projects" ADD "details" jsonb`);
    
    // Restore status column
    await queryRunner.query(`ALTER TABLE "projects" ADD "status" character varying NOT NULL DEFAULT 'IN_PROGRESS'`);
  }
}
