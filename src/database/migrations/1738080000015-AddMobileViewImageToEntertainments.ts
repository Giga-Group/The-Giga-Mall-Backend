import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMobileViewImageToEntertainments1738080000015
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'entertainments',
      new TableColumn({
        name: 'mobileViewImage',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('entertainments', 'mobileViewImage');
  }
}
