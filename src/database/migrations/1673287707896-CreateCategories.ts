import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1673287707896 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "name", type: "varchar", isUnique: true },
          { name: "description", type: "varchar" },
          { name: "create_at", type: "varchar", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories")
  }
}
