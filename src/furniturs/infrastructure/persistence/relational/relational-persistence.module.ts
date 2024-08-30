import { Module } from '@nestjs/common';
import { FurniturRepository } from '../furnitur.repository';
import { FurniturRelationalRepository } from './repositories/furnitur.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FurniturEntity } from './entities/furnitur.entity';
import { FurnitureImageEntity } from './entities/furnitur-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FurniturEntity, FurnitureImageEntity])],
  providers: [
    {
      provide: FurniturRepository,
      useClass: FurniturRelationalRepository,
    },
  ],
  exports: [FurniturRepository],
})
export class RelationalFurniturPersistenceModule {}
