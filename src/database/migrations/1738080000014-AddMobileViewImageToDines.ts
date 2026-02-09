import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMobileViewImageToDines1738080000014
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'dines',
      new TableColumn({
        name: 'mobileViewImage',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('dines', 'mobileViewImage');
  }
}
