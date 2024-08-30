import { MigrationInterface, QueryRunner } from 'typeorm';

export class PropertyField1724657240210 implements MigrationInterface {
  name = 'PropertyField1724657240210';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_ec53f3ec77c8484522b4a6cc26c"`,
    );
    await queryRunner.query(
      `CREATE TABLE "property_image" ("id" uuid NOT NULL, "path" character varying NOT NULL, "propertyId" uuid, CONSTRAINT "PK_7bc43b89d4104149dddea18cdf8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "property" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "purpose" character varying NOT NULL, "description" character varying NOT NULL, "propertyType" "public"."property_propertytype_enum" NOT NULL DEFAULT 'apartment', "bedrooms" integer NOT NULL, "bed" integer NOT NULL, "bathrooms" integer NOT NULL, "area" numeric(8,2) NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "address" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "rentPeriod" "public"."property_rentperiod_enum" NOT NULL DEFAULT 'month', "currency" character varying NOT NULL, "availableFrom" TIMESTAMP NOT NULL, "floorNumber" integer, "isFurnished" boolean NOT NULL DEFAULT false, "heatingSystem" "public"."property_heatingsystem_enum" NOT NULL DEFAULT 'central', "coolingSystem" "public"."property_coolingsystem_enum" NOT NULL DEFAULT 'central', "parkingSpaces" integer, "contactNumber" character varying, "contactName" character varying NOT NULL, "contactEmail" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "property_amenities_amenity" ("propertyId" uuid NOT NULL, "amenityId" uuid NOT NULL, CONSTRAINT "PK_095b2f02026c69c97793c158a39" PRIMARY KEY ("propertyId", "amenityId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d7760c08391960d305d3545527" ON "property_amenities_amenity" ("propertyId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c69572a61bce15aeded2e1d6ba" ON "property_amenities_amenity" ("amenityId") `,
    );
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "value"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "propertyId"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "part"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "rating"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "review"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "ratedBy"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "dateRated"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "motorId"`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "part" character varying(50) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "rating" double precision NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "rating" ADD "review" text`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "ratedBy" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "dateRated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "rating" ADD "motorId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "value" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "rating" ADD "propertyId" uuid`);
    await queryRunner.query(`ALTER TABLE "rating" ADD "userId" integer`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_ec53f3ec77c8484522b4a6cc26c" FOREIGN KEY ("motorId") REFERENCES "motor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "property_image" ADD CONSTRAINT "FK_1f5f43978d27121a7ddd0c2e900" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_c8d5762275b2eff164b80f8396e" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD CONSTRAINT "FK_917755242ab5b0a0b08a63016d9" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "property_amenities_amenity" ADD CONSTRAINT "FK_d7760c08391960d305d3545527f" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "property_amenities_amenity" ADD CONSTRAINT "FK_c69572a61bce15aeded2e1d6bad" FOREIGN KEY ("amenityId") REFERENCES "amenity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "property_amenities_amenity" DROP CONSTRAINT "FK_c69572a61bce15aeded2e1d6bad"`,
    );
    await queryRunner.query(
      `ALTER TABLE "property_amenities_amenity" DROP CONSTRAINT "FK_d7760c08391960d305d3545527f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" DROP CONSTRAINT "FK_917755242ab5b0a0b08a63016d9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_c8d5762275b2eff164b80f8396e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "property_image" DROP CONSTRAINT "FK_1f5f43978d27121a7ddd0c2e900"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_ec53f3ec77c8484522b4a6cc26c"`,
    );
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "propertyId"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "value"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "motorId"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "dateRated"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "ratedBy"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "review"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "rating"`);
    await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "part"`);
    await queryRunner.query(`ALTER TABLE "rating" ADD "motorId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "dateRated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "ratedBy" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "rating" ADD "review" text`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "rating" double precision NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "part" character varying(50) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "rating" ADD "userId" integer`);
    await queryRunner.query(`ALTER TABLE "rating" ADD "propertyId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD "value" integer NOT NULL`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c69572a61bce15aeded2e1d6ba"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d7760c08391960d305d3545527"`,
    );
    await queryRunner.query(`DROP TABLE "property_amenities_amenity"`);
    await queryRunner.query(`DROP TABLE "property"`);
    await queryRunner.query(`DROP TABLE "property_image"`);
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_ec53f3ec77c8484522b4a6cc26c" FOREIGN KEY ("motorId") REFERENCES "motor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }
}
