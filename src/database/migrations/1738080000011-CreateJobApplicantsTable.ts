import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJobApplicantsTable1738080000011
  implements MigrationInterface
{
  name = 'CreateJobApplicantsTable1738080000011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "job_applicants" CASCADE
    `);

    await queryRunner.query(`
      CREATE TABLE "job_applicants" (
        "id" SERIAL NOT NULL,
        "jobId" integer NOT NULL,
        "highestQualification" character varying NOT NULL,
        "candidateName" character varying NOT NULL,
        "email" character varying NOT NULL,
        "phoneNo" character varying,
        "linkedIn" character varying,
        "lastCompany" character varying,
        "lastPosition" character varying,
        "resume" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_job_applicants_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_job_applicants_job" FOREIGN KEY ("jobId")
          REFERENCES "jobs"("id")
          ON DELETE CASCADE
          ON UPDATE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "job_applicants"
    `);
  }
}
