import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMobileViewImageToStores1738080000013
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'stores',
      new TableColumn({
        name: 'mobileViewImage',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('stores', 'mobileViewImage');
  }
}
