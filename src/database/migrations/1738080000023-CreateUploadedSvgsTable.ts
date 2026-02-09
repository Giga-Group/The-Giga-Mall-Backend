import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUploadedSvgsTable1738080000023
  implements MigrationInterface
{
  name = 'CreateUploadedSvgsTable1738080000023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "uploaded_svgs" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "uploaded_svgs" (
        "id" SERIAL NOT NULL,
        "floorId" integer NOT NULL,
        "svgUrl" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_uploaded_svgs_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_uploaded_svgs_floorId" FOREIGN KEY ("floorId") 
          REFERENCES "floors"("id") ON DELETE CASCADE ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "uploaded_svgs"
    `);
  }
}
