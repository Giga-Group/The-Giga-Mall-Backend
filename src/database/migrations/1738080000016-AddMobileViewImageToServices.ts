import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMobileViewImageToServices1738080000016
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'services',
      new TableColumn({
        name: 'mobileViewImage',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('services', 'mobileViewImage');
  }
}
